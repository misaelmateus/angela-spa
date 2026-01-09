'use client';

import * as React from 'react';
import { tracker } from '@/lib/analytics/tracker';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  React.useEffect(() => {
    // Initialize analytics tracker on client side
    tracker.init().catch((error) => {
      console.error('Failed to initialize analytics tracker:', error);
    });
  }, []);

  return <>{children}</>;
}
