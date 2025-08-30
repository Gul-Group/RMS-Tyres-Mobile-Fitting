// components/Navbar.tsx
"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@heroui/react";
import { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="bg-white shadow-md  z-50">
      {/* Brand */}
      <NavbarBrand>
        <Link href="/" className="text-2xl font-bold text-red-600">
          Tyre24/7
        </Link>
      </NavbarBrand>

      {/* Desktop Links */}
      <NavbarContent className="hidden md:flex gap-6 font-medium" justify="center">
        <NavbarItem>
          <Link href="/" className="hover:text-red-600 transition">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/services" className="hover:text-red-600 transition">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pricing" className="hover:text-red-600 transition">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/areas" className="hover:text-red-600 transition">
            Coverage
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Side: CTA + Socials */}
      <NavbarContent justify="end" className="hidden md:flex items-center gap-4">
        <Button
          as={Link}
          href="tel:+441234567890"
          color="danger"
          variant="solid"
          startContent={<PhoneIcon className="w-5 h-5" />}
          className="font-semibold"
        >
          Call Now
        </Button>

        <a href="#" className="text-gray-500 hover:text-red-600 transition">
          <FaFacebookF className="w-4 h-4" />
        </a>
        <a href="#" className="text-gray-500 hover:text-red-600 transition">
          <FaTwitter className="w-4 h-4" />
        </a>
        <a href="#" className="text-gray-500 hover:text-red-600 transition">
          <FaInstagram className="w-4 h-4" />
        </a>
      </NavbarContent>

      {/* Mobile Toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" className="w-full" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/services" className="w-full" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/pricing" className="w-full" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/areas" className="w-full" onClick={() => setIsMenuOpen(false)}>
            Coverage
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            as={Link}
            href="tel:+441234567890"
            color="danger"
            variant="solid"
            startContent={<PhoneIcon className="w-5 h-5" />}
            className="w-full font-semibold"
          >
            Call Now
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
