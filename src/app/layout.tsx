import type { Metadata } from "next";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import TopBar from "@/components/layout/TopBar";
import TopNav from "@/components/layout/TopNav";

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
      <body>
        <HeroUIProvider>
          <TopBar />
          <TopNav />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
