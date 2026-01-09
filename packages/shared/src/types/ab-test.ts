// A/B Testing types

export interface ABTestConfig {
  id: string;
  name: string;
  pagePath: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  trafficAllocation: number;
  variants: ABVariant[];
  startDate?: Date;
  endDate?: Date;
  winnerVariantId?: string;
}

export interface ABVariant {
  id: string;
  name: string;
  isControl: boolean;
  trafficWeight: number;
  config: ABVariantConfig;
}

export interface ABVariantConfig {
  hero?: {
    headline?: string;
    subheadline?: string;
    ctaText?: string;
    backgroundImage?: string;
  };
  showPricing?: boolean;
  pricingStyle?: 'exact' | 'from' | 'hidden' | 'contact';
  featuredServices?: string[];
  ctaStyle?: 'whatsapp' | 'form' | 'both';
  ctaColor?: string;
  showTestimonials?: boolean;
  showBeforeAfter?: boolean;
  showLimitedOffer?: boolean;
  [key: string]: any; // Allow additional custom config
}

export interface ABTestResults {
  testId: string;
  variants: Array<{
    variantId: string;
    name: string;
    isControl: boolean;
    sessionsCount: number;
    conversionsCount: number;
    conversionRate: number;
    avgTimeOnPage?: number;
    avgScrollDepth?: number;
    stats?: {
      pValue: number;
      uplift: number;
      confidence: number;
    };
  }>;
}
