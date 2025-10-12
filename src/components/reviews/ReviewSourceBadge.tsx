import type { ReviewSourceSummary } from "@/lib/types/reviews";
import { cn } from "@/lib/utils/cn";

const platformStyles: Record<ReviewSourceSummary["platform"], string> = {
  google: "bg-[#DB4437] text-white",
  facebook: "bg-[#1877F2] text-white",
};

const platformIconPaths: Record<
  ReviewSourceSummary["platform"],
  { viewBox: string; path: string }
> = {
  google: {
    viewBox: "0 0 24 24",
    path: "M21.35 11.1h-9.18v2.98h5.43c-.24 1.37-.98 2.52-2.09 3.28v2.72h3.38c1.98-1.82 3.13-4.51 3.13-7.7 0-.74-.07-1.46-.2-2.16h-.47z",
  },
  facebook: {
    viewBox: "0 0 24 24",
    path: "M13.5 22v-7h2.5l.5-3h-3V9.5c0-.87.23-1.5 1.5-1.5H16V5.1c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.72 1.38-3.72 3.92V12H8v3h2v7h3.5z",
  },
};

interface ReviewSourceBadgeProps {
  source: ReviewSourceSummary;
}

export function ReviewSourceBadge({ source }: ReviewSourceBadgeProps) {
  const styles = platformStyles[source.platform];
  const icon = platformIconPaths[source.platform];

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-3 rounded-lg px-4 py-3 shadow-sm transition hover:translate-y-[-2px] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
        styles,
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
        <svg
          aria-hidden="true"
          focusable="false"
          className="h-5 w-5"
          viewBox={icon.viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={icon.path} fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold">{source.label}</span>
        <span className="text-xs font-medium">
          {source.rating.toFixed(1)}★ · {source.reviewCount}+ reviews
        </span>
      </span>
    </a>
  );
}

