'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type Variant = string;

interface ABTestConfig {
  testId: string;
  variants: Variant[];
  defaultVariant: Variant;
}

// Simulação - futuramente integrar com backend
const AB_TESTS: Record<string, ABTestConfig> = {
  'laser-pricing-visibility': {
    testId: 'laser-pricing-visibility',
    variants: ['show-prices', 'hide-prices'],
    defaultVariant: 'show-prices',
  },
  'laser-urgency-elements': {
    testId: 'laser-urgency-elements',
    variants: ['with-urgency', 'no-urgency'],
    defaultVariant: 'with-urgency',
  },
  'laser-cta-wording': {
    testId: 'laser-cta-wording',
    variants: ['agendar', 'falar', 'transformar'],
    defaultVariant: 'agendar',
  },
};

export function useABTest(testId: string) {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const config = AB_TESTS[testId];
    if (!config) {
      console.warn(`AB test ${testId} not configured`);
      return;
    }

    // Check URL parameter first (for testing)
    const urlVariant = searchParams?.get(`ab_${testId}`);
    if (urlVariant && config.variants.includes(urlVariant)) {
      setVariant(urlVariant);
      return;
    }

    // Check localStorage for persistent assignment
    const storageKey = `ab_test_${testId}`;
    const stored = localStorage.getItem(storageKey);
    if (stored && config.variants.includes(stored)) {
      setVariant(stored);
      return;
    }

    // Assign random variant (50/50 for now)
    const randomVariant = config.variants[
      Math.floor(Math.random() * config.variants.length)
    ];
    localStorage.setItem(storageKey, randomVariant);
    setVariant(randomVariant);

    // Track assignment (futuro: enviar para analytics)
    console.log(`AB Test: ${testId} = ${randomVariant}`);
  }, [testId, searchParams]);

  return {
    variant: variant || AB_TESTS[testId]?.defaultVariant,
    isLoading: variant === null,
  };
}
