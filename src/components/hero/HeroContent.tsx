import { CTAButton } from '@/components/hero/CTAButton';
import { TrustBar } from '@/components/hero/TrustBar';

export function HeroContent() {
  return (
    <div className="space-y-8 text-center flex flex-col items-center">
      {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
        Same-day mobile fitting
      </p> */}
      <h1
        id="hero-headline"
        className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
      >
        Expert tyre fitting at your doorstep
      </h1>
      <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
        Book trusted RMS Tyres engineers to come to you anywhere in the UK. Quality tyres, transparent pricing, and a 12-month workmanship guarantee.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <CTAButton href="/booking" variant="primary" className="sm:w-auto">
          Book mobile fitting
        </CTAButton>
        <CTAButton href="tel:07932030303" variant="secondary" className="sm:w-auto">
          Call 07932 030 303
        </CTAButton>
      </div>
      <TrustBar />
    </div>
  );
}
