import Link from "next/link"

import { SERVICES } from "@/lib/content/services"

import { ServiceCard } from "@/components/services/ServiceCard"

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Services
        </p>
        <div>
          <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rapid roadside and mobile support when you need it most
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            From on-the-spot tyre repairs to full recovery, RMS Tyres keeps you moving across the UK 24/7.
          </p>
        </div>
        <div className="mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-red-600 underline underline-offset-4">
            Explore all services
          </Link>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.key} service={service} />
        ))}
      </div>
    </section>
  )
}
