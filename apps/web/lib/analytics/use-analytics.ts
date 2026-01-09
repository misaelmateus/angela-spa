'use client';

import { useEffect } from 'react';
import { tracker } from './tracker';
import type { EventType } from './types';

/**
 * Hook to use analytics tracker
 */
export function useAnalytics() {
  useEffect(() => {
    // Tracker auto-initializes on import
    // This hook is just for convenience
  }, []);

  return {
    track: tracker.track.bind(tracker),
    trackWhatsAppClick: tracker.trackWhatsAppClick.bind(tracker),
    trackCTAClick: tracker.trackCTAClick.bind(tracker),
    trackServiceClick: tracker.trackServiceClick.bind(tracker),
    getSessionId: tracker.getSessionId.bind(tracker),
  };
}

/**
 * Hook to track page view on mount
 */
export function usePageView() {
  useEffect(() => {
    // Page view is already tracked by tracker on init
    // This hook is here for explicit page view tracking if needed
  }, []);
}
