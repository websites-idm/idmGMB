import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | ${siteConfig.workshopName}`,
  description: "Join IDM Smart Tech's 3-Day LIVE GMB Mastery Workshop and learn Google Business Profile optimization, local SEO, reviews, citations, verification, keyword research, competitor analysis and AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Placeholders for Analytics */}
        <meta name="meta-pixel-id" content={siteConfig.metaPixelId} />
        <meta name="ga-measurement-id" content={siteConfig.gaMeasurementId} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
