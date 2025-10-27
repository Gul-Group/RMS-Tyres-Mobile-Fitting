"use client";

import type { ReactElement } from "react";
import { Children, cloneElement } from "react";
import dynamic from "next/dynamic";
import type { CustomArrowProps, Settings } from "react-slick";

import { brandNames, topBrandSlugs } from "@/components/brands/brands";
import TopBrandItem from "@/components/brands/TopBrandItem";
import { cn } from "@/lib/utils/cn";

const SlickSlider = dynamic(() => import("react-slick"), { ssr: false });

export interface TopBrandsSliderProps {
  id?: string;
  className?: string;
}

function Arrow({ currentSlide, slideCount, className, ...rest }: CustomArrowProps) {
  const direction = className?.includes("slick-prev") ? "prev" : "next";
  const label = direction === "prev" ? "Previous brand" : "Next brand";
  const totalSlides = typeof slideCount === "number" ? slideCount : 0;
  const atStart = currentSlide === 0;
  const atEnd = currentSlide === totalSlides - 1;
  const disabled = direction === "prev" ? atStart : atEnd;

  return (
    <button
      type="button"
      {...rest}
      className={cn(
        "group flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white/90 text-neutral-700 shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        direction === "prev" ? "scroll-slick-prev" : "scroll-slick-next",
        "absolute top-1/2 -translate-y-1/2",
        className
      )}
      aria-label={label}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden className="text-sm font-medium uppercase tracking-wide">
        {direction === "prev" ? "‹" : "›"}
      </span>
    </button>
  );
}

export default function TopBrandsSlider({ id = "top-brands", className }: TopBrandsSliderProps) {
  const brandLabels = topBrandSlugs.map((slug) => brandNames[slug]);

  const settings: Settings = {
    accessibility: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    customPaging: (index) => (
      <button
        type="button"
        className="group flex h-3 w-3 items-center justify-center"
        aria-label={`Go to ${brandLabels[index] ?? `brand ${index + 1}`}`}
      >
        <span className="sr-only">{brandLabels[index] ?? `Brand ${index + 1}`}</span>
        <span
          aria-hidden
          className="block h-2 w-2 rounded-full bg-neutral-300 transition group-[[class~='slick-active']]:bg-neutral-800"
        />
      </button>
    ),
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex items-center justify-center gap-2" role="tablist">
          {Children.toArray(dots).map((dot, index) => cloneElement(dot as ReactElement, { key: index }))}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
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

      <div aria-roledescription="carousel" aria-labelledby={`${id}-title`} aria-describedby={`${id}-desc`}>
        <SlickSlider {...settings}>
          {topBrandSlugs.map((slug, i) => (
            <TopBrandItem key={slug} slug={slug} name={brandNames[slug]} index={i} priority={i < 2} />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
}


