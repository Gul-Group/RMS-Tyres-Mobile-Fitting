// Hero Analytics - Placeholder implementation
// Ready for GA4 integration when Measurement ID is provided

export interface HeroImpressionEvent {
  event: 'hero_impression';
  page_title: string;
  page_location: string;
  timestamp: number;
}

export interface CTAClickEvent {
  event: 'cta_click';
  cta_method: 'internal' | 'phone';
  cta_label: string;
  cta_destination: string;
  page_title: string;
  page_location: string;
  timestamp: number;
}

// Track hero section impression
export function trackHeroImpression(): void {
  if (typeof window === 'undefined') return;
  
  const event: HeroImpressionEvent = {
    event: 'hero_impression',
    page_title: document.title,
    page_location: window.location.href,
    timestamp: Date.now()
  };

  // Check for Google Analytics 4 dataLayer
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(event);
  }
  
  // Fallback: console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Hero impression tracked:', event);
  }
}

// Track CTA button clicks
export function trackCTAClick(method: 'internal' | 'phone', label: string, destination: string): void {
  if (typeof window === 'undefined') return;
  
  const event: CTAClickEvent = {
    event: 'cta_click',
    cta_method: method,
    cta_label: label,
    cta_destination: destination,
    page_title: document.title,
    page_location: window.location.href,
    timestamp: Date.now()
  };

  // Check for Google Analytics 4 dataLayer
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(event);
  }
  
  // Fallback: console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('CTA click tracked:', event);
  }
}

// GA4 Integration Instructions:
// 1. Add GA4 script to app/layout.tsx:
//    <Script
//      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
//      strategy="afterInteractive"
//    />
//    <Script id="google-analytics" strategy="afterInteractive">
//      {`
//        window.dataLayer = window.dataLayer || [];
//        function gtag(){dataLayer.push(arguments);}
//        gtag('js', new Date());
//        gtag('config', '${GA_MEASUREMENT_ID}');
//      `}
//    </Script>
//
// 2. Replace console.log fallbacks with actual GA4 events
// 3. Test events in GA4 Real-time reports
