import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PostHogProvider from "@/components/providers/PostHogProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Class/variable name kept as "poppins" for backward compatibility with
// existing markup across the site, but now loads Space Grotesk (display/
// heading font per the brand brief).
const poppins = Space_Grotesk({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Serif display face used sparingly -- one accent phrase inside hero
// headlines, in italic, to give the type some of the editorial contrast
// competitor sites (Prism) use, without abandoning the existing Space
// Grotesk system everywhere else.
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://staffanchor.com'),
  title: "StaffAnchor Talent Solutions | Enterprise Sales Hiring for B2B Technology",
  description: "Enterprise sales hiring and leadership search for B2B technology companies in India, backed by verified performance data.",
  keywords: "enterprise sales hiring, sales leadership search, B2B sales recruitment India, account executive recruitment, key account manager hiring, VP sales hiring, CRO recruitment, sales director recruitment, B2B technology sales hiring, cybersecurity sales hiring, cloud sales hiring, SaaS sales recruitment, sales enablement, India recruitment",
  authors: [{ name: "StaffAnchor Talent Solutions" }],
  openGraph: {
    title: "StaffAnchor Talent Solutions",
    description: "Enterprise sales hiring and leadership search for B2B technology companies in India, backed by verified performance data.",
    url: "https://staffanchor.com",
    siteName: "StaffAnchor Talent Solutions",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "StaffAnchor Talent Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StaffAnchor Talent Solutions | Enterprise Sales Hiring for B2B Technology",
    description: "Enterprise sales hiring and leadership search for B2B technology companies in India, backed by verified performance data.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${fraunces.variable} font-inter antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>
        <Suspense fallback={null}>
          <PostHogProvider />
        </Suspense>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
