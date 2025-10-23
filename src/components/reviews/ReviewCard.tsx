import Link from "next/link";

import type { ReviewItem, ReviewSourceSummary } from "@/lib/types/reviews";
import { cn } from "@/lib/utils/cn";
import { StarIcon } from "@/lib/icons";

const platformAccentStyles: Record<ReviewSourceSummary["platform"], string> = {
  google: "text-[#DB4437]",
  facebook: "text-[#1877F2]",
};

interface ReviewCardProps {
  review: ReviewItem;
  source: ReviewSourceSummary;
}

export function ReviewCard({ review, source }: ReviewCardProps) {
  const accentClass = platformAccentStyles[review.platform];
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
  }).format(new Date(review.date));

  return (
    <Link
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      aria-label={`Read ${review.reviewerName}'s review on ${source.label}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600",
            accentClass,
          )}
        >
          <span>{source.label}</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
          <StarIcon
            aria-hidden="true"
            className={cn("h-4 w-4 fill-current", accentClass)}
          />
          <span>
            {review.rating.toFixed(1)}
            <span className="sr-only"> out of 5 stars</span>
          </span>
        </div>
      </div>

      <p className="mt-4 text-base font-medium text-gray-900">
        {review.reviewerName}
      </p>
      <p className="mt-1 text-sm text-gray-500">{formattedDate}</p>

      <p className="mt-4 flex-1 text-sm text-gray-700">
        “{review.excerpt}”
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
        Read full review
        <span
          aria-hidden="true"
          className={cn(
            "transition-transform group-hover:translate-x-1",
            accentClass,
          )}
        >
          →
        </span>
      </span>
    </Link>
  );
}

