"use client";

import { useEffect, useId, useRef, useState } from "react";

export interface TopBrandsSliderClientProps {
  containerId: string;
  total: number;
  labels: string[];
  ownerId: string;
}

export default function TopBrandsSliderClient({ containerId, total, labels, ownerId }: TopBrandsSliderClientProps) {
  const [active, setActive] = useState(0);
  const liveId = useId();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const computeActive = () => {
      if (!(container instanceof HTMLElement)) return;
      const children = Array.from(container.querySelectorAll<HTMLElement>("li[role='listitem']"));
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < children.length; i++) {
        const el = children[i];
        const center = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(center - containerCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      }
      setActive(bestIndex);
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        computeActive();
      });
    };

    computeActive();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [containerId]);

  const scrollToIndex = (index: number) => {
    const container = document.getElementById(containerId) as HTMLElement | null;
    if (!container) return;
    const children = Array.from(container.querySelectorAll<HTMLElement>("li[role='listitem']"));
    const target = children[index];
    if (!target) return;
    const offset = target.offsetLeft + target.offsetWidth / 2 - container.clientWidth / 2;
    container.scrollTo({ left: Math.max(0, offset), behavior: "smooth" });
  };

  const goPrev = () => scrollToIndex(Math.max(0, active - 1));
  const goNext = () => scrollToIndex(Math.min(total - 1, active + 1));

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div className="mt-3 flex items-center justify-between gap-2" onKeyDown={onKeyDown}>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="min-h-[44px] min-w-[44px] rounded border border-neutral-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40"
          aria-label="Previous brand"
          onClick={goPrev}
          disabled={active === 0}
        >
          Prev
        </button>
        <button
          type="button"
          className="min-h-[44px] min-w-[44px] rounded border border-neutral-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40"
          aria-label="Next brand"
          onClick={goNext}
          disabled={active === total - 1}
        >
          Next
        </button>
      </div>
      <div className="flex items-center gap-2" aria-label="Brand position" role="tablist">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Go to ${labels[i] ?? `brand ${i + 1}`}`}
            className={`h-3 w-3 rounded-full border border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              active === i ? "bg-neutral-800" : "bg-white"
            }`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
      <p id={`${ownerId}-live-${liveId}`} aria-live="polite" aria-atomic="true" className="sr-only">
        Showing brand {active + 1} of {total}
      </p>
    </div>
  );
}


