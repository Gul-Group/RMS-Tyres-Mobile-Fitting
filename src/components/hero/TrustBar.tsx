import { StarIcon, ClockIcon, ShieldCheckIcon } from "@/lib/icons";

const trustItems = [
  {
    icon: StarIcon,
    label: 'Rating: 4.9 out of 5',
    text: '4.9★ 500+ Reviews',
    description: '500+ customer reviews'
  },
  {
    icon: ClockIcon,
    label: 'Same-day service promise',
    text: 'Same-Day Service',
    description: 'Book today, fitted today'
  },
  {
    icon: ShieldCheckIcon,
    label: '12-month warranty guarantee',
    text: '12-Month Guarantee',
    description: 'Full warranty on all work'
  }
];

export function TrustBar() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 md:gap-6">
      {trustItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div 
            key={index}
            className="flex items-center gap-2"
          >
            <IconComponent 
              className="h-5 w-5 flex-shrink-0 text-red-600" 
              aria-hidden="true"
            />
            <span>{item.text}</span>
            <span className="sr-only">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
