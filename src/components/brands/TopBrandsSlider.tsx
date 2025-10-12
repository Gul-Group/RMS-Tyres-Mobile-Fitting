import { brandNames, topBrandSlugs, totalBrands } from "@/components/brands/brands";
import TopBrandItem from "@/components/brands/TopBrandItem";
import TopBrandsSliderClient from "@/components/brands/TopBrandsSliderClient";

export interface TopBrandsSliderProps {
  id?: string;
  className?: string;
}

export default function TopBrandsSlider({ id = "top-brands", className }: TopBrandsSliderProps) {
  const containerId = `${id}-scroller`;
  return (
    <section
      role="group"
      aria-roledescription="carousel"
      aria-label="Top tyre brands"
      className={className}
    >
      <h2 className="sr-only">Top tyre brands</h2>
      <div className="flex items-center justify-between gap-2">
        <p className="sr-only" id={`${id}-desc`}>
          Explore trusted tyre brand logos
        </p>
      </div>

      <div
        id={containerId}
        className="no-scrollbar snap-x-mandatory overflow-x-auto overscroll-x-contain -mx-4 px-4"
        aria-describedby={`${id}-desc`}
        tabIndex={0}
      >
        <ul role="list" className="flex items-center gap-2 md:gap-4">
          {topBrandSlugs.map((slug, i) => (
            <TopBrandItem
              key={slug}
              slug={slug}
              name={brandNames[slug]}
              index={i}
              priority={i < 2}
            />
          ))}
        </ul>
      </div>

      <TopBrandsSliderClient
        containerId={containerId}
        total={totalBrands}
        labels={topBrandSlugs.map((s) => brandNames[s])}
        ownerId={id}
      />
    </section>
  );
}


