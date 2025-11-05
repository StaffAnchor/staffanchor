import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";
import StickyConsultationButton from "@/components/ui/StickyConsultationButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://staffanchor.com'),
  title: "StaffAnchor Talent Solutions - AI-Driven Executive Search & Recruitment",
  description: "Modern-age, AI-enabled recruitment consultancy offering Executive Search, Functional Hiring, and Industry Expertise. Build teams that build the future.",
  keywords: "Executive Search India, Functional Hiring Experts, Industry-Specific Recruitment, AI-Driven Recruitment Consultancy",
  authors: [{ name: "StaffAnchor Talent Solutions" }],
  openGraph: {
    title: "StaffAnchor Talent Solutions - AI-Driven Executive Search",
    description: "We Build Teams That Build the Future. Leadership • Functional • Industry-Specific Hiring — Powered by AI & Human Intelligence",
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
    title: "StaffAnchor Talent Solutions - AI-Driven Executive Search",
    description: "We Build Teams That Build the Future. Powered by AI & Human Intelligence",
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
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>
        <PageLoader>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <StickyConsultationButton />
        </PageLoader>
      </body>
    </html>
  );
}
