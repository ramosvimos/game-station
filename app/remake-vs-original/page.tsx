import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { comparisonRows, lastUpdated, relatedLinks } from "@/data/game";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata, longTailKeywords } from "@/lib/seo";

const title = "Code Veronica Remake vs Original – Confirmed, Expected and Unknown Changes";
const description =
  "Compare Resident Evil Code Veronica Remake vs the original, including camera, controls, combat, saving, visuals, voice acting, cutscenes, puzzles and boss fights.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/remake-vs-original",
  keywords: ["Code Veronica remake vs original", "Resident Evil Code Veronica Remake gameplay", ...longTailKeywords],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Remake vs Original", href: "/remake-vs-original" }
];

const toc = [
  { id: "comparison-table", label: "Comparison table" },
  { id: "status-rules", label: "Status rules" }
];

export default function RemakeVsOriginalPage() {
  return (
    <ArticleLayout
      eyebrow="Comparison"
      title="Code Veronica Remake vs Original"
      description="A living comparison table that separates confirmed facts from expected remake patterns and unknown details."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), articleJsonLd({ headline: title, description, path: "/remake-vs-original", dateModified: lastUpdated })]} />

      <section id="comparison-table" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Comparison table</h2>
        <ComparisonTable rows={comparisonRows} />
      </section>

      <section id="status-rules" className="prose-horror space-y-5">
        <h2>Status rules</h2>
        <p>
          Confirmed means a tracked official/store source directly supports the statement. Expected means it is a cautious remake-era expectation, not a promise. Unknown means the MVP has no source-backed details yet.
        </p>
        <p>
          When new official information arrives, update the row text, status, sourceIds and lastVerified fields in data/game.ts.
        </p>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/remake-vs-original")} />
    </ArticleLayout>
  );
}
