import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceBadge } from "@/components/SourceBadge";
import { lastUpdated, relatedLinks, sources } from "@/data/game";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { reliabilityScore, sourceTypeLabel } from "@/lib/sources";

const title = "Veronica Hub Sources – Official, Media, Database and SEO References";
const description =
  "All Veronica Hub source records with source name, type, URL, last checked date and reliability score for Resident Evil Code Veronica Remake coverage.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/sources",
  keywords: ["Veronica Hub sources", "Resident Evil Code Veronica Remake sources"],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Sources", href: "/sources" }
];

const toc = [
  { id: "sources-list", label: "Sources list" },
  { id: "data-policy", label: "Data policy" },
  { id: "seo-tools", label: "SEO tools" }
];

export default function SourcesPage() {
  return (
    <ArticleLayout
      eyebrow="Sources"
      title="Veronica Hub Sources"
      description="A transparent list of tracked sources used by this independent fan-made information hub."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), articleJsonLd({ headline: title, description, path: "/sources", dateModified: lastUpdated })]} />

      <section id="sources-list" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Sources list</h2>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045]">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] divide-y divide-white/10 text-left">
              <thead className="bg-white/[0.04] text-sm uppercase tracking-[0.2em] text-stone-400">
                <tr>
                  <th className="px-5 py-4">Source name</th>
                  <th className="px-5 py-4">Source type</th>
                  <th className="px-5 py-4">URL</th>
                  <th className="px-5 py-4">Last checked</th>
                  <th className="px-5 py-4">Reliability score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {sources.map((source) => (
                  <tr key={source.id}>
                    <td className="px-5 py-5 font-semibold text-white">{source.name}</td>
                    <td className="px-5 py-5 text-stone-300">{sourceTypeLabel(source.type)}</td>
                    <td className="px-5 py-5">
                      <SourceBadge source={source} />
                    </td>
                    <td className="px-5 py-5 font-mono text-sm text-stone-300">{source.lastChecked}</td>
                    <td className="px-5 py-5 text-stone-300">{reliabilityScore(source.reliability)}/100 ({source.reliability})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="data-policy" className="prose-horror space-y-5">
        <h2>Data policy</h2>
        <p>
          Every fact object should include sourceIds and a lastVerified date. Unknown items should stay Unknown, and rumor items should stay Rumor until an official source confirms them.
        </p>
      </section>

      <section id="seo-tools" className="prose-horror space-y-5">
        <h2>SEO tools</h2>
        <p>
          Google Trends, Google Search Console and YouTube Data API are listed as planning sources. The MVP does not automate those APIs; use them manually or add compliant API integrations later.
        </p>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/sources")} />
    </ArticleLayout>
  );
}
