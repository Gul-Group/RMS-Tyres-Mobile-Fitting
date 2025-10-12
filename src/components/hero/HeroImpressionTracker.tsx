'use client';

import { useEffect } from 'react';
import { trackHeroImpression } from '@/lib/analytics/hero-analytics';

export function HeroImpressionTracker() {
  useEffect(() => {
    // Track hero impression when component mounts
    trackHeroImpression();
  }, []);

  return null;
}
