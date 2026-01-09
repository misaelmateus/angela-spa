import { Router, Request, Response } from 'express';
import { prisma } from '../db/client';
import { logger } from '../utils/logger';

const router = Router();

/**
 * POST /api/v1/analytics/session
 * Create a new session
 */
router.post('/session', async (req: Request, res: Response) => {
  try {
    const {
      sessionId,
      ipAddress,
      userAgent,
      deviceType,
      browser,
      os,
      landingPage,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
    } = req.body;

    // Validate required fields
    if (!sessionId || !landingPage) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if session already exists
    const existingSession = await prisma.session.findUnique({
      where: { sessionId },
    });

    if (existingSession) {
      // Update last activity
      await prisma.session.update({
        where: { sessionId },
        data: { lastActivityAt: new Date() },
      });

      return res.json({ sessionId, existing: true });
    }

    // Create new session
    const session = await prisma.session.create({
      data: {
        sessionId,
        ipAddress: ipAddress || req.headers['x-forwarded-for'] || req.ip || 'unknown',
        userAgent,
        deviceType,
        browser,
        os,
        landingPage,
        referrer,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
      },
    });

    logger.info(`New session created: ${sessionId}`);

    res.json({ sessionId: session.sessionId, existing: false });
  } catch (error) {
    logger.error('Error creating session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

/**
 * POST /api/v1/analytics/track
 * Track an event
 */
router.post('/track', async (req: Request, res: Response) => {
  try {
    const {
      sessionId,
      eventType,
      eventName,
      eventData,
      elementId,
      elementText,
      pagePath,
    } = req.body;

    // Validate required fields
    if (!sessionId || !eventType || !pagePath) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Find session
    const session = await prisma.session.findUnique({
      where: { sessionId },
    });

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Create event
    const event = await prisma.event.create({
      data: {
        sessionId: session.id,
        eventType,
        eventName,
        eventData,
        elementId,
        elementText,
        pagePath,
      },
    });

    // Update session last activity
    await prisma.session.update({
      where: { sessionId },
      data: { lastActivityAt: new Date() },
    });

    // Check if it's a conversion event (WhatsApp click)
    if (eventType === 'whatsapp_click') {
      await prisma.conversion.create({
        data: {
          sessionId: session.id,
          eventId: event.id,
          conversionType: 'whatsapp_click',
          pagePath,
          serviceInterest: eventData?.serviceInterest,
        },
      });

      // Mark session as converted
      await prisma.session.update({
        where: { sessionId },
        data: {
          converted: true,
          conversionAt: new Date(),
        },
      });

      logger.info(`Conversion tracked for session: ${sessionId}`);
    }

    res.json({ success: true, eventId: event.id });
  } catch (error) {
    logger.error('Error tracking event:', error);
    res.status(500).json({ error: 'Failed to track event' });
  }
});

/**
 * GET /api/v1/analytics/stats
 * Get analytics statistics
 */
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, page } = req.query;

    const where: any = {};

    if (startDate) {
      where.createdAt = { gte: new Date(startDate as string) };
    }

    if (endDate) {
      where.createdAt = {
        ...where.createdAt,
        lte: new Date(endDate as string),
      };
    }

    if (page) {
      where.landingPage = page;
    }

    const [totalSessions, convertedSessions, totalEvents, totalConversions] =
      await Promise.all([
        prisma.session.count({ where }),
        prisma.session.count({ where: { ...where, converted: true } }),
        prisma.event.count(),
        prisma.conversion.count(),
      ]);

    const conversionRate =
      totalSessions > 0 ? (convertedSessions / totalSessions) * 100 : 0;

    res.json({
      totalSessions,
      convertedSessions,
      conversionRate: conversionRate.toFixed(2),
      totalEvents,
      totalConversions,
    });
  } catch (error) {
    logger.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

export default router;
