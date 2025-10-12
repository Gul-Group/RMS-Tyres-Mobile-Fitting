"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Menu, X } from "lucide-react"
import { useState } from "react"
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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            "inline-flex items-center justify-center p-2 rounded-md",
            "text-gray-700 hover:text-red-600 hover:bg-gray-50",
            "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
            "transition-colors duration-200",
            "md:hidden" // Hide on desktop
          )}
          aria-label="Open main menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            "min-w-[200px] bg-white rounded-md shadow-lg border border-gray-200",
            "p-2 space-y-1",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2",
            "z-50"
          )}
          side="bottom"
          align="start"
          sideOffset={8}
        >
          {navigationItems.map((item) => (
            <DropdownMenu.Item key={item.href} asChild>
              <NavLink
                href={item.href}
                className="w-full text-left block px-3 py-2 rounded-md hover:bg-gray-50 focus:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
