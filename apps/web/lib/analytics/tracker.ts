import { getOrCreateSessionId, parseUserAgent } from './fingerprint';
import type { TrackEventParams, EventType } from '@angela/shared';

/**
 * Analytics Tracker
 * Handles all event tracking and sends to backend
 */
class AnalyticsTracker {
  private sessionId: string | null = null;
  private initialized = false;
  private eventQueue: TrackEventParams[] = [];
  private pageLoadTime: number = 0;
  private scrollDepths: Set<number> = new Set();

  /**
   * Initialize the tracker
   */
  async init(): Promise<void> {
    if (this.initialized) return;

    try {
      // Get or create session ID
      this.sessionId = await getOrCreateSessionId();

      // Record page load time
      this.pageLoadTime = Date.now();

      // Setup automatic tracking
      this.setupAutoTracking();

      // Create session in backend
      await this.createSession();

      // Track page view
      await this.trackPageView();

      // Process any queued events
      await this.processQueue();

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  /**
   * Create session in backend
   */
  private async createSession(): Promise<void> {
    if (!this.sessionId) return;

    const userAgent = navigator.userAgent;
    const { deviceType, browser, os } = parseUserAgent(userAgent);

    const sessionData = {
      sessionId: this.sessionId,
      userAgent,
      deviceType,
      browser,
      os,
      landingPage: window.location.pathname,
      referrer: document.referrer || undefined,
      utmSource: this.getQueryParam('utm_source'),
      utmMedium: this.getQueryParam('utm_medium'),
      utmCampaign: this.getQueryParam('utm_campaign'),
      utmContent: this.getQueryParam('utm_content'),
      utmTerm: this.getQueryParam('utm_term'),
    };

    try {
      const response = await fetch('/api/track/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sessionData),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Session creation failed: ${error}`);
      }

      console.log('Session created successfully:', this.sessionId);
    } catch (error) {
      console.error('Failed to create session:', error);
      // Rethrow to prevent tracker from initializing if session creation fails
      throw error;
    }
  }

  /**
   * Track an event
   */
  async track(params: Omit<TrackEventParams, 'sessionId' | 'pagePath'>): Promise<void> {
    if (!this.sessionId) {
      // Queue event if not initialized yet
      this.eventQueue.push({
        ...params,
        sessionId: '',
        pagePath: window.location.pathname,
      });
      return;
    }

    const eventData: TrackEventParams = {
      ...params,
      sessionId: this.sessionId,
      pagePath: window.location.pathname,
    };

    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  /**
   * Track page view
   */
  private async trackPageView(): Promise<void> {
    await this.track({
      eventType: 'page_view',
      eventName: document.title,
    });
  }

  /**
   * Track WhatsApp click (MAIN CONVERSION)
   */
  async trackWhatsAppClick(serviceInterest?: string): Promise<void> {
    await this.track({
      eventType: 'whatsapp_click',
      eventName: 'WhatsApp CTA Click',
      eventData: { serviceInterest },
      elementId: 'whatsapp-cta',
    });
  }

  /**
   * Track CTA click
   */
  async trackCTAClick(ctaName: string, elementId?: string): Promise<void> {
    await this.track({
      eventType: 'cta_click',
      eventName: ctaName,
      elementId,
    });
  }

  /**
   * Track service card click
   */
  async trackServiceClick(serviceName: string): Promise<void> {
    await this.track({
      eventType: 'service_card_click',
      eventName: serviceName,
      eventData: { service: serviceName },
    });
  }

  /**
   * Setup automatic tracking (scroll, time on page, etc)
   */
  private setupAutoTracking(): void {
    // Track scroll depth
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercentage = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        // Track at 25%, 50%, 75%, 100%
        const milestones = [25, 50, 75, 100];
        for (const milestone of milestones) {
          if (scrollPercentage >= milestone && !this.scrollDepths.has(milestone)) {
            this.scrollDepths.add(milestone);
            this.track({
              eventType: 'scroll_depth',
              eventName: `Scrolled ${milestone}%`,
              eventData: { depth: milestone },
            });
          }
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track time on page on unload
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - this.pageLoadTime) / 1000);
      this.track({
        eventType: 'time_on_page',
        eventName: 'Page Exit',
        eventData: { seconds: timeOnPage },
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Track visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeOnPage = Math.round((Date.now() - this.pageLoadTime) / 1000);
        this.track({
          eventType: 'time_on_page',
          eventName: 'Page Hidden',
          eventData: { seconds: timeOnPage },
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  /**
   * Process queued events
   */
  private async processQueue(): Promise<void> {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event && this.sessionId) {
        event.sessionId = this.sessionId;
        await this.track(event);
      }
    }
  }

  /**
   * Get query parameter value
   */
  private getQueryParam(param: string): string | undefined {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || undefined;
  }

  /**
   * Get session ID
   */
  getSessionId(): string | null {
    return this.sessionId;
  }
}

// Export singleton instance
export const tracker = new AnalyticsTracker();

// Auto-initialize on import (client-side only, after hydration)
if (typeof window !== 'undefined') {
  // Wait for React hydration to complete before initializing
  if (document.readyState === 'complete') {
    tracker.init().catch(console.error);
  } else {
    window.addEventListener('load', () => {
      tracker.init().catch(console.error);
    });
  }
}
