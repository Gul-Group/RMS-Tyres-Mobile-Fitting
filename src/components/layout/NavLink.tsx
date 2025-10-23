"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/cn"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  title?: string
  prefetch?: boolean
}

export default function NavLink({
  href,
  children,
  className,
  title,
  prefetch = true,
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
        "text-gray-800 hover:text-red-600",
        "after:absolute after:left-2 after:right-2 after:bottom-0 after:h-[2px] after:bg-red-600",
        "after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out",
        isActive
          ? "text-red-600 after:scale-x-100"
          : "hover:after:scale-x-100",
        className
      )}
      aria-current={isActive ? "page" : undefined}
      title={title || (typeof children === "string" ? children : undefined)}
    >
      {children}
    </Link>
  )
}
