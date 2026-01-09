import { Router, Request, Response } from 'express';
import { prisma } from '../db/client';
import { logger } from '../utils/logger';

const router = Router();

/**
 * GET /api/v1/ab-tests
 * List all A/B tests (for admin)
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const where: any = {};
    if (status) {
      where.status = status;
    }

    const tests = await prisma.abTest.findMany({
      where,
      include: {
        variants: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(tests);
  } catch (error) {
    logger.error('Error listing A/B tests:', error);
    res.status(500).json({ error: 'Failed to list A/B tests' });
  }
});

/**
 * GET /api/v1/ab-tests/:id
 * Get single A/B test configuration
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const test = await prisma.abTest.findUnique({
      where: { id },
      include: {
        variants: true,
      },
    });

    if (!test) {
      return res.status(404).json({ error: 'Test not found' });
    }

    res.json(test);
  } catch (error) {
    logger.error('Error fetching A/B test:', error);
    res.status(500).json({ error: 'Failed to fetch A/B test' });
  }
});

/**
 * GET /api/v1/ab-tests/variants/:id
 * Get single variant configuration
 */
router.get('/variants/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const variant = await prisma.abVariant.findUnique({
      where: { id },
    });

    if (!variant) {
      return res.status(404).json({ error: 'Variant not found' });
    }

    res.json(variant);
  } catch (error) {
    logger.error('Error fetching variant:', error);
    res.status(500).json({ error: 'Failed to fetch variant' });
  }
});

/**
 * POST /api/v1/ab-tests/variant
 * Get variant for page and session
 */
router.post('/variant', async (req: Request, res: Response) => {
  try {
    const { sessionId, pagePath } = req.body;

    if (!sessionId || !pagePath) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Find session
    const session = await prisma.session.findUnique({
      where: { sessionId },
    });

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Find active test for this page
    const test = await prisma.abTest.findFirst({
      where: {
        pagePath,
        status: 'active',
      },
      include: {
        variants: true,
      },
    });

    if (!test) {
      return res.json({ variant: null });
    }

    // Check if session already has a variant assigned
    if (session.abVariantId) {
      const variant = await prisma.abVariant.findUnique({
        where: { id: session.abVariantId },
      });

      if (variant && variant.abTestId === test.id) {
        return res.json({ variant, test });
      }
    }

    // No variant assigned yet, will be assigned by client
    res.json({ variant: null, test });
  } catch (error) {
    logger.error('Error getting variant for page:', error);
    res.status(500).json({ error: 'Failed to get variant' });
  }
});

/**
 * POST /api/v1/ab-tests/assign
 * Record variant assignment for a session
 */
router.post('/assign', async (req: Request, res: Response) => {
  try {
    const { sessionId, testId, variantId } = req.body;

    if (!sessionId || !testId || !variantId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Find session
    const session = await prisma.session.findUnique({
      where: { sessionId },
    });

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Verify test and variant exist
    const [test, variant] = await Promise.all([
      prisma.abTest.findUnique({ where: { id: testId } }),
      prisma.abVariant.findUnique({ where: { id: variantId } }),
    ]);

    if (!test) {
      return res.status(404).json({ error: 'Test not found' });
    }

    if (!variant) {
      return res.status(404).json({ error: 'Variant not found' });
    }

    if (variant.abTestId !== testId) {
      return res.status(400).json({ error: 'Variant does not belong to test' });
    }

    // Update session with variant assignment
    await prisma.session.update({
      where: { sessionId },
      data: { abVariantId: variantId },
    });

    logger.info(
      `Assigned variant ${variantId} to session ${sessionId} for test ${testId}`
    );

    res.json({ success: true });
  } catch (error) {
    logger.error('Error assigning variant:', error);
    res.status(500).json({ error: 'Failed to assign variant' });
  }
});

/**
 * POST /api/v1/ab-tests
 * Create new A/B test (admin only)
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      pagePath,
      trafficAllocation,
      startDate,
      endDate,
      variants,
    } = req.body;

    // Validate required fields
    if (!name || !pagePath || !variants || variants.length < 2) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate traffic weights sum to 1
    const totalWeight = variants.reduce(
      (sum: number, v: any) => sum + v.trafficWeight,
      0
    );
    if (Math.abs(totalWeight - 1) > 0.01) {
      return res
        .status(400)
        .json({ error: 'Variant traffic weights must sum to 1' });
    }

    // Create test with variants
    const test = await prisma.abTest.create({
      data: {
        name,
        description,
        pagePath,
        trafficAllocation: trafficAllocation || 1.0,
        startDate: startDate ? new Date(startDate) : new Date(),
        endDate: endDate ? new Date(endDate) : null,
        status: 'draft',
        variants: {
          create: variants.map((v: any) => ({
            name: v.name,
            isControl: v.isControl || false,
            trafficWeight: v.trafficWeight,
            config: v.config || {},
          })),
        },
      },
      include: {
        variants: true,
      },
    });

    logger.info(`Created new A/B test: ${test.id} - ${test.name}`);

    res.json(test);
  } catch (error) {
    logger.error('Error creating A/B test:', error);
    res.status(500).json({ error: 'Failed to create A/B test' });
  }
});

/**
 * PATCH /api/v1/ab-tests/:id
 * Update A/B test (admin only)
 */
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      status,
      trafficAllocation,
      startDate,
      endDate,
      winnerVariantId,
    } = req.body;

    const updateData: any = {};

    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) updateData.status = status;
    if (trafficAllocation !== undefined)
      updateData.trafficAllocation = trafficAllocation;
    if (startDate !== undefined) updateData.startDate = new Date(startDate);
    if (endDate !== undefined)
      updateData.endDate = endDate ? new Date(endDate) : null;
    if (winnerVariantId !== undefined)
      updateData.winnerVariantId = winnerVariantId;

    const test = await prisma.abTest.update({
      where: { id },
      data: updateData,
      include: {
        variants: true,
      },
    });

    logger.info(`Updated A/B test: ${test.id} - ${test.name}`);

    res.json(test);
  } catch (error) {
    logger.error('Error updating A/B test:', error);
    res.status(500).json({ error: 'Failed to update A/B test' });
  }
});

/**
 * DELETE /api/v1/ab-tests/:id
 * Delete A/B test (admin only)
 */
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Delete all variants first
    await prisma.abVariant.deleteMany({
      where: { abTestId: id },
    });

    // Delete test
    await prisma.abTest.delete({
      where: { id },
    });

    logger.info(`Deleted A/B test: ${id}`);

    res.json({ success: true });
  } catch (error) {
    logger.error('Error deleting A/B test:', error);
    res.status(500).json({ error: 'Failed to delete A/B test' });
  }
});

/**
 * GET /api/v1/ab-tests/:id/results
 * Get test results with statistics
 */
router.get('/:id/results', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const test = await prisma.abTest.findUnique({
      where: { id },
      include: {
        variants: true,
      },
    });

    if (!test) {
      return res.status(404).json({ error: 'Test not found' });
    }

    // Get session and conversion counts for each variant
    const results = await Promise.all(
      test.variants.map(async (variant) => {
        const [sessionsCount, conversionsCount] = await Promise.all([
          prisma.session.count({
            where: { abVariantId: variant.id },
          }),
          prisma.session.count({
            where: {
              abVariantId: variant.id,
              converted: true,
            },
          }),
        ]);

        const conversionRate =
          sessionsCount > 0 ? (conversionsCount / sessionsCount) * 100 : 0;

        return {
          variantId: variant.id,
          variantName: variant.name,
          isControl: variant.isControl,
          sessionsCount,
          conversionsCount,
          conversionRate: parseFloat(conversionRate.toFixed(2)),
        };
      })
    );

    res.json({
      testId: test.id,
      testName: test.name,
      status: test.status,
      results,
    });
  } catch (error) {
    logger.error('Error fetching test results:', error);
    res.status(500).json({ error: 'Failed to fetch test results' });
  }
});

export default router;
