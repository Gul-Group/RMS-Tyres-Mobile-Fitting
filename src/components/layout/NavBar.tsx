import Link from "next/link"
import MobileMenu from "./MobileMenu"
import NavLink from "./NavLink"
import { cn } from "@/lib/utils/cn"

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tyres", label: "Tyres" },
  { href: "/coverage-area", label: "Coverage Area" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button - Left on mobile, hidden on desktop */}
          <div className="flex items-center md:hidden order-1">
            <MobileMenu />
          </div>

          {/* Logo - Center on mobile, left on desktop */}
          <div className="flex items-center order-2 md:order-1">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md"
              aria-label="RMS Tyres - Home"
            >
              <span className="text-xl font-bold text-red-600 font-poppins">
                RMS TYRES
              </span>
            </Link>
          </div>

          {/* Desktop navigation links - Hidden on mobile */}
          <div className="hidden md:flex md:items-center md:space-x-1 order-2">
            {navigationItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button - Right on all screen sizes */}
          <div className="flex items-center order-3">
            <Link
              href="tel:07932030303"
              className={cn(
                "inline-flex items-center px-4 py-2 text-sm font-medium",
                "text-white bg-red-600 hover:bg-red-700",
                "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                "rounded-md transition-colors duration-200",
                "font-poppins"
              )}
            >
              Call Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
