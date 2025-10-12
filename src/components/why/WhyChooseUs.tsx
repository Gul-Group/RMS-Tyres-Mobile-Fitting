import { BadgeCheck, Clock, ShieldCheck, ThumbsUp, Wrench } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Expert engineers",
    description:
      "Fully trained, insured technicians equipped with modern mobile workshops.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced skills",
    description: "Years of roadside support and precision tyre fitting expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed service",
    description: "12-month workmanship guarantee for confidence at every call-out.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted work",
    description: "Thousands of happy customers and a consistent 4.9★ average rating.",
  },
]

const badges = [
  {
    icon: Clock,
    label: "Approx. 45-minute response time",
  },
  {
    icon: ShieldCheck,
    label: "24-hour mobile fitting service",
  },
]

export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Why choose us
        </p>
        <h2
          id="why-choose-us-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Mobile tyre experts trusted across the UK
        </h2>
        <p className="text-base text-gray-600 sm:text-lg">
          Professional fitters, rapid response times, and dependable workmanship to keep you moving day or night.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-900"
          >
            <Icon aria-hidden="true" className="h-4 w-4" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


