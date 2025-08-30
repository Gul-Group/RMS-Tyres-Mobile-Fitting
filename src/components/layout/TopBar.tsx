// components/TopBar.tsx
// "use client";

import { PhoneIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-black text-gray-100 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
        {/* Left side: Emergency contact info */}
        <div className="flex items-center space-x-6 font-medium">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 text-red-500 hover:text-red-400 transition"
          >
            <PhoneIcon className="w-5 h-5" />
            <span>24/7 Hotline: +44 1234 567890</span>
          </a>
          <div className="hidden sm:flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-yellow-400" />
            <span>Open 24 Hours</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-green-400" />
            <span>London & Surrounding Areas</span>
          </div>
        </div>

        {/* Right side: Social Media */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-red-400 transition">
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-red-400 transition">
            <FaTwitter className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-red-400 transition">
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
