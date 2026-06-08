import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const longTailKeywords = [
  "Resident Evil Code Veronica Remake release date",
  "Resident Evil Veronica release date",
  "Resident Evil Code Veronica Remake platforms",
  "Resident Evil Code Veronica Remake trailer",
  "Resident Evil Veronica Steam",
  "Resident Evil Code Veronica Remake gameplay",
  "Resident Evil Code Veronica Remake story",
  "Resident Evil Code Veronica Remake characters",
  "Code Veronica remake vs original",
  "Resident Evil Veronica PC"
];

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.domain}${normalized === "/" ? "" : normalized}`;
}

export function buildMetadata(args: {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(args.path);
  const title = args.title;
  const description = args.description;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.domain),
    alternates: {
      canonical: url
    },
    keywords: [...(args.keywords ?? siteConfig.defaultSeo.keywords)],
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      type: args.type ?? "website",
      images: [
        {
          url: "/og-default.svg",
          width: 1200,
          height: 630,
          alt: "Veronica Hub abstract horror editorial card"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.svg"]
    }
  };
}
