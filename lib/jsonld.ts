import { faqs, type FAQItem } from "@/data/game";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.domain,
    description: siteConfig.tagline,
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };
}

export function faqJsonLd(items: FAQItem[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function articleJsonLd(args: {
  headline: string;
  description: string;
  path: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url: absoluteUrl(args.path),
    dateModified: args.dateModified,
    datePublished: args.dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.domain
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.domain
    },
    image: absoluteUrl("/og-default.svg"),
    inLanguage: "en-US"
  };
}
