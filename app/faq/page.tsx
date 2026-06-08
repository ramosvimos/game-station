import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { faqs, lastUpdated, relatedLinks } from "@/data/game";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata, longTailKeywords } from "@/lib/seo";

const title = "Resident Evil Code Veronica Remake FAQ – Release Date, PC, Steam and Official Status";
const description =
  "FAQ for Resident Evil Code Veronica Remake covering official status, release date, PC and Steam platforms, remake vs remaster status and Veronica Hub's disclaimer.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/faq",
  keywords: ["Resident Evil Code Veronica Remake FAQ", "Resident Evil Veronica Steam", ...longTailKeywords],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" }
];

const toc = [
  { id: "faq", label: "FAQ" },
  { id: "safety-note", label: "Safety note" }
];

export default function FAQPage() {
  return (
    <ArticleLayout
      eyebrow="FAQ"
      title="Resident Evil Code Veronica Remake FAQ"
      description="Fast answers for new players, with sources attached to each fact-heavy answer."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(faqs), articleJsonLd({ headline: title, description, path: "/faq", dateModified: lastUpdated })]} />

      <section id="faq" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">FAQ</h2>
        <FAQAccordion items={faqs} />
      </section>

      <section id="safety-note" className="prose-horror space-y-5">
        <h2>Safety note</h2>
        <p>
          Veronica Hub does not provide ROMs, ISOs, emulator downloads, cracks, bypasses, unauthorized uploads or piracy resources. This MVP is an information hub only.
        </p>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/faq")} />
    </ArticleLayout>
  );
}
