import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AnalyticsPlaceholder } from "@/components/AnalyticsPlaceholder";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import { websiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.defaultSeo.title,
    template: `%s | ${siteConfig.siteName}`
  },
  description: siteConfig.defaultSeo.description,
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteJsonLd()} />
        <AnalyticsPlaceholder />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
