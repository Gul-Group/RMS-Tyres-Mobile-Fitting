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
  const baseClasses = "transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "hero-cta-primary",
    secondary: "hero-cta-secondary"
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
