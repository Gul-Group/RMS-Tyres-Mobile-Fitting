import { StarIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';

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
    <div className="flex flex-wrap gap-4 md:gap-6">
      {trustItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div 
            key={index}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <IconComponent 
              className="w-4 h-4 text-red-600 flex-shrink-0" 
              aria-hidden="true"
            />
            <span className="font-medium">{item.text}</span>
            <span className="sr-only">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
