"use client";

import dynamic from "next/dynamic";

import { brandNames, topBrandSlugs } from "@/components/brands/brands";
import TopBrandItem from "@/components/brands/TopBrandItem";
import { Settings } from "react-slick";

const SlickSlider = dynamic(() => import("react-slick"), { ssr: false });

export interface TopBrandsSliderProps {
  id?: string;
  className?: string;
}

export default function TopBrandsSlider({
  id = "top-brands",
  className,
}: TopBrandsSliderProps) {
  const brandLabels = topBrandSlugs.map((slug) => brandNames[slug]);

  const settings: Settings = {
    accessibility: true,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section role="region" aria-label="Top tyre brands" className={className}>
      <h2 className="sr-only" id={`${id}-title`}>
        Top tyre brands
      </h2>
      <p className="sr-only" id={`${id}-desc`}>
        Explore trusted tyre brand logos
      </p>

      <div
        aria-roledescription="carousel"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-desc`}
      >
        <SlickSlider {...settings}>
          {topBrandSlugs.map((slug, i) => (
            <TopBrandItem
              key={slug}
              slug={slug}
              name={brandNames[slug]}
              index={i}
              priority={i < 2}
            />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
}
