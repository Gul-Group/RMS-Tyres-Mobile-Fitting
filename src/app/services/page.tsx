import type { Metadata } from "next"
import Link from "next/link"

import { SERVICES } from "@/lib/content/services"

import { ServiceCard } from "@/components/services/ServiceCard"

const siteUrl = "https://rmstyres.co.uk"
const pageUrl = `${siteUrl}/services/`

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting & Roadside Services | RMS Tyres",
  description:
    "24/7 mobile tyre fitting, breakdown recovery, accident recovery, jump starts, and wheel alignment across the UK.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Mobile Tyre Fitting & Roadside Services | RMS Tyres",
    description:
      "Emergency tyre support, breakdown recovery, and wheel services delivered to your location anywhere in the UK.",
    url: pageUrl,
    siteName: "RMS Tyres Mobile Fitting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Tyre Fitting & Roadside Services | RMS Tyres",
    description:
      "Emergency tyre support, breakdown recovery, and wheel services delivered to your location anywhere in the UK.",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: pageUrl,
    },
  ],
}

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#services`,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "AutoService",
      name: "RMS Tyres Mobile Fitting",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    url: `${siteUrl}${service.href}`,
  })),
}

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Our Services</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Everything you need to get back on the road
        </h1>
        <p className="text-base text-gray-600 sm:text-lg">
          RMS Tyres delivers mobile tyre fitting, emergency roadside recovery, and wheel alignment services wherever you are in the UK. Book online in minutes or call 07932 030303 for immediate support.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.key} service={service} />
        ))}
      </div>

      <section
        aria-labelledby="services-cta-heading"
        className="mt-16 rounded-3xl bg-gray-900 px-6 py-12 text-white sm:px-10"
      >
        <div className="max-w-3xl space-y-4">
          <h2 id="services-cta-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Need help straight away?
          </h2>
          <p className="text-base text-gray-200">
            Call our 24/7 mobile fitting line on <a className="font-semibold text-white underline" href="tel:07932030303">07932 030303</a> or book a slot online. We cover London, the Midlands, Yorkshire, and beyond with specialist technicians.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-100"
            >
              Book mobile fitting
            </Link>
            <a
              href="tel:07932030303"
              className="inline-flex items-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-gray-900"
            >
              Call 24/7 support
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
    </main>
  )
}
