import type { Metadata } from "next";
import { Barlow, Oswald } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { businessName, contactDetails, toAbsoluteUrl } from "@/lib/site";

const bodyFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(toAbsoluteUrl("/")),
  title: businessName,
  description:
    "Specialists in brake testing, repairs, and component supply for mining, transport, and industrial applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessName,
    url: toAbsoluteUrl("/"),
    telephone: contactDetails.mainOffice.phone,
    email: contactDetails.mainOffice.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactDetails.address,
      addressLocality: "Kuruman",
      addressCountry: "South Africa",
    },
  };

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} min-h-screen`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
