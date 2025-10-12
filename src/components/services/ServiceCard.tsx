import Link from "next/link"

import type { Service } from "@/lib/types/services"
import { cn } from "@/lib/utils/cn"

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition",
        "hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg",
        className,
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
      <p className="mt-3 text-sm text-gray-600">{service.description}</p>
      <div className="mt-6 pt-4">
        <Link
          href={service.href}
          className={cn(
            "inline-flex items-center rounded-full border border-red-600 px-4 py-2 text-sm font-medium text-red-600",
            "transition-colors hover:bg-red-600 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
          )}
          aria-label={`${service.name} — ${service.ctaLabel}`}
        >
          {service.ctaLabel}
        </Link>
      </div>
    </article>
  )
}
