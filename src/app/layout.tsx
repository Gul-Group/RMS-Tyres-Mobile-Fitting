// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import WhatsAppButton from "../components/layout/WhatsAppButton";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-poppins",
  // Consider disabling preload if hero is not above-the-fold or CLS is stable without it
  preload: true,
});

export const metadata: Metadata = {
  title: "RMS Tyres Mobile Fitting | Same-day Mobile Tyre Fitting UK",
  description:
    "Emergency mobile tyre fitting across the UK. Same-day service, competitive prices, and 12-month warranty from RMS Tyres.",
  metadataBase: new URL("https://www.rmstyres.co.uk"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 320,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.rmstyres.co.uk",
    title: "RMS Tyres Mobile Fitting",
    description:
      "Emergency mobile tyre fitting across the UK. Same-day service, competitive prices, and 12-month warranty.",
    siteName: "RMS Tyres",
    images: [
      {
        url: "https://www.rmstyres.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RMS Tyres Mobile Fitting Service",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMS Tyres Mobile Fitting",
    description:
      "Same-day and emergency mobile tyre fitting across the UK by RMS Tyres.",
    images: ["https://www.rmstyres.co.uk/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-black focus:text-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <header>
          <NavBar />
          <WhatsAppButton />
        </header>

        <main id="main-content">{children}</main>

        <footer>
          <Footer />
        </footer>

        {/* LocalBusiness / AutomotiveBusiness structured data */}
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            name: "RMS Tyres Mobile Fitting",
            url: "https://www.rmstyres.co.uk",
            image: "https://www.rmstyres.co.uk/og-image.jpg",
            telephone: "+44 1234 567890",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "United Kingdom",
            },
            address: { "@type": "PostalAddress", addressCountry: "GB" },
            description:
              "Emergency and same-day mobile tyre fitting across the UK. Competitive prices with high quality product.",
            serviceType: ["Mobile Tyre Fitting", "Emergency Mobile Fitting"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: ["English"],
              url: "https://wa.me/923001234567",
            },
          })}
        </Script>
      </body>
    </html>
  );
}
