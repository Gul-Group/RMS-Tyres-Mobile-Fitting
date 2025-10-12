import type { ReviewItem, ReviewSourceSummary } from "@/lib/types/reviews";

export const reviewSources: ReviewSourceSummary[] = [
  {
    platform: "google",
    label: "Google Reviews",
    rating: 4.9,
    reviewCount: 426,
    url: "https://g.co/kgs/CNpDzXL",
  },
  {
    platform: "facebook",
    label: "Facebook Reviews",
    rating: 5.0,
    reviewCount: 198,
    url: "https://www.facebook.com/rmstyres/reviews/",
  },
];

export const featuredReviews: ReviewItem[] = [
  {
    id: "google-1",
    platform: "google",
    reviewerName: "Jessica Morgan",
    rating: 5,
    date: "2024-07-18",
    excerpt:
      "Brilliant service! They sourced a new tyre within the hour and fitted it on my driveway. Highly recommend RMS Tyres.",
    url: "https://g.co/kgs/8JcXyHs",
  },
  {
    id: "google-2",
    platform: "google",
    reviewerName: "Daniel Peters",
    rating: 5,
    date: "2024-06-04",
    excerpt:
      "Booked in the morning and by lunchtime the technician had arrived. Friendly, professional, and fast.",
    url: "https://g.co/kgs/bn5pCQ7",
  },
  {
    id: "facebook-1",
    platform: "facebook",
    reviewerName: "Sophie Ahmed",
    rating: 5,
    date: "2024-05-12",
    excerpt:
      "Our fleet relies on RMS Tyres. They always turn up on time and keep us road-ready.",
    url: "https://www.facebook.com/rmstyres/reviews/",
  },
];

