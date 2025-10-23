import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import NavBar from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import WhatsAppButton from "../components/layout/WhatsAppButton";
import "./globals.css";

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
          <WhatsAppButton />
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
