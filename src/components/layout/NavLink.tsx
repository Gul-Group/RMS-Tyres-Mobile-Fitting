"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  prefetch?: boolean;
}

export default function NavLink({
  href,
  children,
  className,
  title,
  prefetch = true,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
        "text-gray-800 hover:text-red-600",
        // underline indicator using ::after
        "after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:bg-red-600 after:transition-opacity after:duration-200",
        isActive
          ? "after:opacity-100 text-red-600"
          : "after:opacity-0 hover:after:opacity-100",
        className
      )}
      aria-current={isActive ? "page" : undefined}
      title={title || (typeof children === "string" ? children : undefined)}
    >
      {children}
    </Link>
  );
}
