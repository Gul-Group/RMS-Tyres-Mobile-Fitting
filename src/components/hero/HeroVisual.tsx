import { HeroPattern } from './svg/HeroPattern';

const stats = [
  {
    title: '97% same-day callouts',
    description: 'Engineers across Greater London, Essex, Kent & Surrey',
  },
  {
    title: 'Tyres fitted every 12 minutes',
    description: 'From premium to budget brands held in stock',
  },
];

export function HeroVisual() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="absolute inset-0 -z-10 text-red-200">
        <HeroPattern />
      </div>
      <div className="relative w-full max-w-md space-y-6 rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-lg font-semibold text-red-600">
            RMS
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Trusted by fleet & private drivers</p>
            <p className="text-xs text-gray-500">12-month workmanship guarantee</p>
          </div>
        </div>
        <dl className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.title}>
              <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-red-500">
                {stat.title}
              </dt>
              <dd className="mt-1 text-sm text-gray-700">{stat.description}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gray-200 text-xs font-semibold text-gray-600"
                aria-hidden="true"
              >
                {item + 1}
              </span>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">4.9★ Trustpilot rating</p>
            <p className="text-xs text-gray-500">Based on 500+ verified reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
