export type ReviewPlatform = "google" | "facebook";

export interface ReviewSourceSummary {
  platform: ReviewPlatform;
  label: string;
  rating: number;
  reviewCount: number;
  url: string;
}

export interface ReviewItem {
  id: string;
  platform: ReviewPlatform;
  reviewerName: string;
  rating: number;
  date: string;
  excerpt: string;
  url: string;
}

