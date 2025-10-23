import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils/cn";
import { PhoneIcon } from "@/src/lib/icons";

const navigationItems = [
  { href: "/", label: "Home", title: "RMS Tyres Mobile Fitting - Home", prefetch: true },
  { href: "/services", label: "Services", title: "Mobile Tyre Fitting Services UK", prefetch: true },
  { href: "/tyres", label: "Tyres", title: "Tyres for Cars, Vans & Emergency Fitting", prefetch: true },
  { href: "/coverage-area", label: "Coverage Area", title: "UK Mobile Tyre Fitting Coverage", prefetch: true },
  { href: "/faq", label: "FAQ", title: "Frequently Asked Questions - RMS Tyres", prefetch: false },
  { href: "/about", label: "About", title: "About RMS Tyres Mobile Fitting", prefetch: false },
  { href: "/contact", label: "Contact", title: "Contact RMS Tyres UK", prefetch: true },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden order-1">
            <MobileMenu />
          </div>

          {/* Logo */}
          <div className="flex items-center order-2 md:order-1">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md"
              aria-label="RMS Tyres Mobile Fitting - Home"
            >
              <span className="text-xl font-bold text-red-600 font-poppins tracking-tight">
                RMS TYRES
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 order-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                title={item.title}
                prefetch={item.prefetch}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center order-3">
            <Link
              href="tel:07932030303"
              aria-label="Call RMS Tyres now for emergency mobile tyre fitting in the UK"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold",
                "text-white bg-red-600 hover:bg-red-700 active:bg-red-700",
                "focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2",
                "rounded-md transition-transform duration-150 hover:scale-[1.02]",
                "font-poppins shadow-sm"
              )}
            >
              <PhoneIcon className="w-5 h-5" aria-hidden="true" />
              Call Now
            </Link>
          </div>
        </div>
      </nav>

      
    </header>
  );
}
