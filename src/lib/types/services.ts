export interface Service {
  key:
    | "mobile-tyre-fitting"
    | "breakdown-recovery"
    | "accident-recovery"
    | "flat-tyre"
    | "jump-start"
    | "tyres-wheel-alignment"
  name: string
  description: string
  href: string
  ctaLabel: string
  icon: React.ComponentType<{ className?: string }>
}
