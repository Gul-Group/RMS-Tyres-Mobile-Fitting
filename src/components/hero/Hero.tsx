import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-headline"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 ">
        <HeroContent />
      </div>
    </section>
  );
}
