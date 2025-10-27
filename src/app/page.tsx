import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import TopBrandsSlider from "@/components/brands/TopBrandsSlider";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { WhyChooseUs } from "@/components/why/WhyChooseUs";

export const metadata: Metadata = {
  title: "Expert Mobile Tyre Fitting — We Come to You | RMS Tyres",
  description:
    "Same-day mobile tyre fitting service across the UK. Trusted fitters, 12-month warranty, competitive prices. Book in minutes.",
  keywords:
    "mobile tyre fitting, tyre fitting service, same day tyre fitting, mobile tyre service, UK tyre fitting",
  openGraph: {
    title: "Expert Mobile Tyre Fitting — We Come to You | RMS Tyres",
    description:
      "Same-day mobile tyre fitting service across the UK. Trusted fitters, 12-month warranty, competitive prices.",
    type: "website",
    url: "https://rmstyres.co.uk",
    siteName: "RMS Tyres Mobile Fitting",
    images: [
      {
        url: "/images/hero/hero-van-technician.webp",
        width: 400,
        height: 400,
        alt: "RMS Tyres mobile fitting van with professional technician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Mobile Tyre Fitting — We Come to You | RMS Tyres",
    description:
      "Same-day mobile tyre fitting service across the UK. Trusted fitters, 12-month warranty, competitive prices.",
    images: ["/images/hero/hero-van-technician.webp"],
  },
  alternates: {
    canonical: "https://rmstyres.co.uk",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TopBrandsSlider />
      <ServicesSection />
      <WhyChooseUs />

      {/* <section aria-label="Trusted tyre brands" className="mt-16"></section> */}
      <ReviewsSection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "RMS Tyres Mobile Fitting",
            description:
              "Professional mobile tyre fitting service across the UK. Same-day service, competitive prices, 12-month warranty.",
            url: "https://rmstyres.co.uk",
            telephone: "07932030303",
            email: "info@rmstyres.co.uk",
            address: {
              "@type": "PostalAddress",
              addressCountry: "GB",
              addressRegion: "England",
            },
            geo: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 51.5074,
                longitude: -0.1278,
              },
              geoRadius: "40234",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 51.5074,
                longitude: -0.1278,
              },
              geoRadius: "40234",
            },
            serviceType: "Mobile Tyre Fitting",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Tyre Fitting Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile Tyre Fitting",
                    description:
                      "Professional mobile tyre fitting service at your location",
                  },
                },
              ],
            },
            openingHours: "Mo-Su 00:00-23:59",
            priceRange: "££",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "624",
            },
          }),
        }}
      />
    </main>
  );
}
