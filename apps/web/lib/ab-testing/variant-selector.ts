/**
 * A/B Testing Variant Selector
 *
 * Handles traffic splitting and variant assignment for A/B tests.
 * Ensures users get a consistent experience by persisting variant assignments.
 */

import { useEffect, useState } from 'react';

interface ABTest {
  id: string;
  name: string;
  pagePath: string;
  status: 'active' | 'paused' | 'completed';
  trafficAllocation: number; // 0-1
  variants: ABVariant[];
}

interface ABVariant {
  id: string;
  name: string;
  isControl: boolean;
  trafficWeight: number; // 0-1
  config: Record<string, any>;
}

interface VariantAssignment {
  testId: string;
  variantId: string;
  timestamp: number;
}

const STORAGE_KEY = 'angela_ab_assignments';
const ASSIGNMENT_TTL = 30 * 24 * 60 * 60 * 1000; // 30 days

class VariantSelector {
  private assignments: Map<string, VariantAssignment>;
  private isClient: boolean;

  constructor() {
    this.assignments = new Map();
    this.isClient = typeof window !== 'undefined';

    if (this.isClient) {
      this.loadAssignments();
    }
  }

  /**
   * Load variant assignments from localStorage
   */
  private loadAssignments(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;

      const assignments: VariantAssignment[] = JSON.parse(stored);
      const now = Date.now();

      // Filter out expired assignments
      assignments.forEach((assignment) => {
        if (now - assignment.timestamp < ASSIGNMENT_TTL) {
          this.assignments.set(assignment.testId, assignment);
        }
      });
    } catch (error) {
      console.error('Failed to load A/B test assignments:', error);
    }
  }

  /**
   * Save variant assignments to localStorage
   */
  private saveAssignments(): void {
    if (!this.isClient) return;

    try {
      const assignments = Array.from(this.assignments.values());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
    } catch (error) {
      console.error('Failed to save A/B test assignments:', error);
    }
  }

  /**
   * Get or assign variant for a session and test
   */
  async getVariantForSession(
    sessionId: string,
    testId: string
  ): Promise<ABVariant | null> {
    // Check if already assigned
    const existing = this.assignments.get(testId);
    if (existing) {
      // Fetch variant config from backend
      const variant = await this.fetchVariant(existing.variantId);
      return variant;
    }

    // Fetch test configuration
    const test = await this.fetchTest(testId);
    if (!test || test.status !== 'active') {
      return null;
    }

    // Check if user is included in traffic allocation
    if (!this.isIncludedInTraffic(sessionId, test.trafficAllocation)) {
      // User not in test, return control variant
      const control = test.variants.find((v) => v.isControl);
      return control || null;
    }

    // Select variant using weighted random selection
    const variant = this.selectVariant(test.variants);

    // Save assignment
    this.assignments.set(testId, {
      testId,
      variantId: variant.id,
      timestamp: Date.now(),
    });
    this.saveAssignments();

    // Notify backend of assignment
    await this.recordAssignment(sessionId, testId, variant.id);

    return variant;
  }

  /**
   * Get variant for current page
   */
  async getVariantForPage(
    sessionId: string,
    pagePath: string
  ): Promise<ABVariant | null> {
    try {
      const response = await fetch('/api/variant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, pagePath }),
      });

      if (!response.ok) return null;

      const data = await response.json();
      return data.variant || null;
    } catch (error) {
      console.error('Failed to get variant for page:', error);
      return null;
    }
  }

  /**
   * Determine if session is included in traffic allocation
   */
  private isIncludedInTraffic(sessionId: string, allocation: number): boolean {
    // Use session ID hash to consistently include/exclude users
    const hash = this.simpleHash(sessionId);
    const normalized = hash / 0xffffffff; // Normalize to 0-1
    return normalized < allocation;
  }

  /**
   * Select variant using weighted random selection
   */
  private selectVariant(variants: ABVariant[]): ABVariant {
    const totalWeight = variants.reduce((sum, v) => sum + v.trafficWeight, 0);
    let random = Math.random() * totalWeight;

    for (const variant of variants) {
      random -= variant.trafficWeight;
      if (random <= 0) {
        return variant;
      }
    }

    // Fallback to first variant (shouldn't happen)
    return variants[0];
  }

  /**
   * Simple hash function for consistent traffic splitting
   */
  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  /**
   * Fetch test configuration from backend
   */
  private async fetchTest(testId: string): Promise<ABTest | null> {
    try {
      const response = await fetch(`/api/backend/v1/ab-tests/${testId}`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch test:', error);
      return null;
    }
  }

  /**
   * Fetch variant configuration from backend
   */
  private async fetchVariant(variantId: string): Promise<ABVariant | null> {
    try {
      const response = await fetch(`/api/backend/v1/ab-tests/variants/${variantId}`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch variant:', error);
      return null;
    }
  }

  /**
   * Record variant assignment in backend
   */
  private async recordAssignment(
    sessionId: string,
    testId: string,
    variantId: string
  ): Promise<void> {
    try {
      await fetch('/api/variant/assign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, testId, variantId }),
      });
    } catch (error) {
      console.error('Failed to record variant assignment:', error);
    }
  }

  /**
   * Clear all variant assignments (for testing)
   */
  clearAssignments(): void {
    this.assignments.clear();
    if (this.isClient) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

// Singleton instance
export const variantSelector = new VariantSelector();

/**
 * React hook for A/B testing
 */
export function useABTest(testId: string, sessionId: string) {
  const [variant, setVariant] = useState<ABVariant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    variantSelector
      .getVariantForSession(sessionId, testId)
      .then((v) => {
        setVariant(v);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to get variant:', error);
        setLoading(false);
      });
  }, [testId, sessionId]);

  return { variant, loading };
}

/**
 * Get variant config value with fallback
 */
export function getVariantConfig<T>(
  variant: ABVariant | null,
  key: string,
  defaultValue: T
): T {
  if (!variant || !variant.config) return defaultValue;
  return (variant.config[key] as T) ?? defaultValue;
}
