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
  title: "StaffAnchor Talent Solutions - AI-Driven Sales Hiring",
  description: "We help companies hire top-performing Sales Leaders & Revenue Teams. B2B & B2C Sales · Leadership · GTM Roles — Powered by AI + Sales Expertise",
  keywords: "sales hiring, sales recruitment, executive search, sales leaders, revenue team hiring, B2B sales recruitment, B2C sales hiring, GTM roles, go-to-market hiring, sales talent acquisition, AI recruitment, sales headhunter, business development hiring, account executive recruitment, sales manager hiring, CRO recruitment, VP sales hiring, regional sales manager, sales director recruitment, inside sales hiring, field sales recruitment, sales operations hiring, pre-sales hiring, sales enablement recruitment, channel sales hiring, enterprise sales recruitment, startup sales hiring, volume hiring, leadership hiring, interim hiring, sales talent intelligence, India recruitment, executive recruitment India, talent solutions, recruitment consultancy",
  authors: [{ name: "StaffAnchor Talent Solutions" }],
  openGraph: {
    title: "StaffAnchor Talent Solutions",
    description: "We help companies hire top-performing Sales Leaders & Revenue Teams. B2B & B2C Sales · Leadership · GTM Roles — Powered by AI + Sales Expertise",
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
    title: "StaffAnchor Talent Solutions - AI-Driven Sales Hiring",
    description: "We help companies hire top-performing Sales Leaders & Revenue Teams. B2B & B2C Sales · Leadership · GTM Roles — Powered by AI + Sales Expertise",
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
