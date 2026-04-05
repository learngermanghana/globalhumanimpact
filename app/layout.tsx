import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BUSINESS, SEO_KEYWORDS } from "@/lib/constants";


export const metadata: Metadata = {
  metadataBase: new URL("https://247-print-house.vercel.app"),
  title: {
    default: "247 PRINT HOUSE | Printing Company in Accra, Ghana",
    template: "%s | 247 PRINT HOUSE",
  },
  description:
    "247 PRINT HOUSE is a professional printing company in Accra, Ghana. We provide business cards, flyers, banners, stickers, brochures, event printing, and custom print jobs.",
  keywords: SEO_KEYWORDS,
  openGraph: {
    title: "247 PRINT HOUSE | Professional Printing Services in Accra",
    description:
      "Quality printing with fast turnaround for businesses, events, and institutions across Accra and Ghana.",
    type: "website",
    locale: "en_GH",
    siteName: BUSINESS.displayName,
  },
  twitter: {
    card: "summary_large_image",
    title: "247 PRINT HOUSE | Printing Services in Ghana",
    description:
      "Business cards, flyers, banners, stickers, brochures, and custom print production in Accra.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
