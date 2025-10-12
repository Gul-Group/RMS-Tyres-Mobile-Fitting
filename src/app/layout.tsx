import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import NavBar from "@/components/layout/NavBar";
import TopBar from "@/components/layout/TopBar";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configure Poppins font - only load weights used in hero
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"], // Only hero headline weights for performance
  display: "swap",
  variable: "--font-poppins",
  preload: true, // Preload for critical hero text
});

export const metadata: Metadata = {
  title: "RMS Tyres Mobile Fitting",
  description: "Professional mobile tyre fitting service across the UK. Same-day service, competitive prices, 12-month warranty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Theme accentColor="red">
          <TopBar 
            title="Mobile Tyre Fitting 24/7 — Quick, Reliable, Guaranteed"
            actionLabel="Call Now"
            actionHref="tel:07932030303"
          />
          <NavBar />
          <main>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
