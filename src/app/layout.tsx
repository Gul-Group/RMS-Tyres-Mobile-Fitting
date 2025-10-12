import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import TopBar from "@/components/layout/TopBar";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RMS Tyres Mobile Fitting",
  description: "4Hr Mobile tyre fiting",
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
            title="RMS Tyres Mobile Fitting"
            actionLabel="Call Now"
            actionHref="tel:07932030303"
          />
          <main>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
