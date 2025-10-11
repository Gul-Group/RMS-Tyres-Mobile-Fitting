import type { Metadata } from "next";
import "./globals.css"; "@heroui/react";

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
          {children}
      </body>
    </html>
  );
}
