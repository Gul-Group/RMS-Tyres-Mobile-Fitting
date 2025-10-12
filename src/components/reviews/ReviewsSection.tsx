import Link from "next/link";

import { featuredReviews, reviewSources } from "@/lib/content/reviews";

import { ReviewCard } from "./ReviewCard";
import { ReviewSourceBadge } from "./ReviewSourceBadge";

export function ReviewsSection() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="bg-gray-50 py-20"
    >
      <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Trusted mobile tyre fitters
            </p>
            <h2
              id="reviews-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
            >
              Customers rate RMS Tyres 5 stars for speed and service
            </h2>
            <p className="mt-4 text-base text-gray-600">
              See the latest Google and Facebook reviews from motorists and
              fleet managers across the UK. Tap to read the full feedback on
              each platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {reviewSources.map((source) => (
                <ReviewSourceBadge key={source.platform} source={source} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <span className="text-4xl font-semibold text-gray-900">
              600+
              <span className="sr-only">total reviews from Google and Facebook</span>
            </span>
            <span className="text-sm text-gray-600">
              Combined customer reviews across Google and Facebook.
            </span>
            <Link
              href="/booking"
              className="inline-flex items-center rounded-full border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Book mobile fitting
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredReviews.map((review) => {
            const source = reviewSources.find(
              (item) => item.platform === review.platform,
            );

            if (!source) {
              return null;
            }

            return (
              <ReviewCard key={review.id} review={review} source={source} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

