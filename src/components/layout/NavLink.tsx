"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/cn"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
        "hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
        "rounded-md",
        isActive
          ? "text-red-600 bg-red-50"
          : "text-gray-700 hover:bg-gray-50",
        className
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  )
}
