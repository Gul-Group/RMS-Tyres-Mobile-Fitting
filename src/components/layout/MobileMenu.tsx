"use client"

import { useState } from "react"
import NavLink from "./NavLink"
import { cn } from "@/lib/utils/cn"
import { MenuIcon, XIcon } from "@/lib/icons"

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tyres", label: "Tyres" },
  { href: "/coverage-area", label: "Coverage Area" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:hidden">
      <button
        className={cn(
          "inline-flex items-center justify-center p-2 rounded-md",
          "text-gray-700 hover:text-red-600 hover:bg-gray-50",
          "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
          "transition-colors duration-200"
        )}
        aria-label="Open main menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white rounded-md shadow-lg border border-gray-200 p-2 space-y-1 z-50">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="w-full text-left block px-3 py-2 rounded-md hover:bg-gray-50 focus:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}
