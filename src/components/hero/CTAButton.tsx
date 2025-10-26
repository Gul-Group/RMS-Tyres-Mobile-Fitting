'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { trackCTAClick } from '@/lib/analytics/hero-analytics';

interface CTAButtonProps {
  href: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ 
  href, 
  variant, 
  children, 
  className 
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:w-auto';

  const variantClasses: Record<CTAButtonProps['variant'], string> = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus-visible:bg-red-700',
    secondary: 'border border-gray-300 text-gray-900 hover:border-gray-400 hover:text-gray-900 focus-visible:border-gray-400'
  };

  const handleClick = () => {
    const method = href.startsWith('tel:') ? 'phone' : 'internal';
    const label = children?.toString() || '';
    trackCTAClick(method, label, href);
  };

  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      aria-label={variant === 'primary' ? 'Book Mobile Fit — open booking page' : 'Call RMS Tyres Mobile Fitting'}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
