import { CTAButton } from '@/components/hero/CTAButton';
import { TrustBar } from '@/components/hero/TrustBar';

export function HeroContent() {
  return (
    <div className="space-y-6">
      {/* Topline */}
      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
        We come to your car — same-day tyre fitting
      </p>
      
      {/* Headline */}
      <h1 
        id="hero-headline"
        className="hero-headline"
      >
        Expert Mobile Tyre Fitting — We Come to You
      </h1>
      
      {/* Subhead */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Same-day service across the UK. Trusted fitters, 12-month warranty, competitive prices. Book in minutes.
      </p>
      
      {/* CTA Group */}
      <div className="flex flex-col sm:flex-row gap-4">
        <CTAButton 
          href="/booking"
          variant="primary"
          className="w-full sm:w-auto"
        >
          Book Mobile Fit
        </CTAButton>
        
        <CTAButton 
          href="tel:07932030303"
          variant="secondary"
          className="w-full sm:w-auto"
        >
          Call Now
        </CTAButton>
      </div>
      
      {/* Trust Bar */}
      <TrustBar />
    </div>
  );
}
