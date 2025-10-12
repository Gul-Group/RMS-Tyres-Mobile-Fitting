import {
  AlertCircle,
  BatteryCharging,
  Gauge,
  ShieldAlert,
  Truck,
  Wrench,
} from "lucide-react"

import type { Service } from "@/lib/types/services"

export const SERVICES: Service[] = [
  {
    key: "mobile-tyre-fitting",
    name: "Mobile Tyre Fitting",
    description:
      "Emergency replacements at your driveway, workplace, or roadside with same-day response across the UK.",
    href: "/booking",
    ctaLabel: "Book mobile fitting",
    icon: Wrench,
  },
  {
    key: "breakdown-recovery",
    name: "Breakdown Recovery",
    description:
      "Rapid recovery for cars and vans, including towing to your chosen garage or safe location.",
    href: "/booking",
    ctaLabel: "Request recovery",
    icon: Truck,
  },
  {
    key: "accident-recovery",
    name: "Accident Recovery",
    description: "24/7 accident assistance with secure vehicle transport and coordination with insurers.",
    href: "/booking",
    ctaLabel: "Arrange assistance",
    icon: ShieldAlert,
  },
  {
    key: "flat-tyre",
    name: "Flat Tyre",
    description: "On-the-spot puncture repairs or replacements to get you back on the road safely.",
    href: "/booking",
    ctaLabel: "Fix my tyre",
    icon: AlertCircle,
  },
  {
    key: "jump-start",
    name: "Jump Start",
    description: "Battery jump starts using the right equipment to protect your vehicle electronics.",
    href: "/booking",
    ctaLabel: "Get a jump start",
    icon: BatteryCharging,
  },
  {
    key: "tyres-wheel-alignment",
    name: "Tyres & Wheel Alignment",
    description: "New tyres supplied and fitted with wheel balancing and alignment checks for even wear.",
    href: "/booking",
    ctaLabel: "Book alignment",
    icon: Gauge,
  },
]
