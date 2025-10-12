import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroImpressionTracker } from './HeroImpressionTracker';

export function Hero() {
  return (
    <section 
      className="hero-container"
      aria-labelledby="hero-headline"
    >
      <HeroImpressionTracker />
      <div className="hero-grid">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
