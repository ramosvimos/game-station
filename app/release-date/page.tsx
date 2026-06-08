import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FactCard } from "@/components/FactCard";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceBadge } from "@/components/SourceBadge";
import { lastUpdated, quickFacts, relatedLinks } from "@/data/game";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata, longTailKeywords } from "@/lib/seo";
import { getSources } from "@/lib/sources";

const title = "Resident Evil Code Veronica Remake Release Date – 2027 Window and Updates";
const description =
  "Track the Resident Evil Code Veronica Remake release date, confirmed 2027 window, exact-date status, demo status and source-backed update rules.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/release-date",
  keywords: ["Resident Evil Code Veronica Remake release date", "Resident Evil Veronica release date", ...longTailKeywords],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Release Date", href: "/release-date" }
];

const toc = [
  { id: "release-window", label: "Release window" },
  { id: "exact-date", label: "Exact date status" },
  { id: "demo-price-specs", label: "Demo, price and specs" },
  { id: "update-policy", label: "Update policy" }
];

export default function ReleaseDatePage() {
  const releaseWindow = quickFacts.find((fact) => fact.label === "Release window")!;
  const exactDate = quickFacts.find((fact) => fact.label === "Exact release date")!;
  const demo = quickFacts.find((fact) => fact.label === "Demo")!;
  const price = quickFacts.find((fact) => fact.label === "Price")!;
  const specs = quickFacts.find((fact) => fact.label === "System requirements")!;
  const officialSources = getSources(["capcom-official", "steam-store"]);

  return (
    <ArticleLayout
      eyebrow="Release date tracker"
      title="Resident Evil Code Veronica Remake Release Date"
      description="The release window is tracked separately from exact-date, price, demo and system-requirement details so unconfirmed details stay clearly labeled."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), articleJsonLd({ headline: title, description, path: "/release-date", dateModified: lastUpdated })]} />

      <section id="release-window" className="prose-horror space-y-5">
        <h2>Release window</h2>
        <FactCard fact={releaseWindow} />
        <p>
          The current source-backed release information is a 2027 window. Veronica Hub does not claim a month, day, preload date or launch time unless a tracked official source confirms it.
        </p>
      </section>

      <section id="exact-date" className="prose-horror space-y-5">
        <h2>Exact date status</h2>
        <FactCard fact={exactDate} />
        <div className="rounded-3xl border border-amber-300/20 bg-amber-950/20 p-5">
          <p className="font-semibold text-amber-100">No exact release date has been confirmed yet.</p>
          <p className="mt-2 text-stone-300">
            When a precise date is confirmed, update the fact value, status, sourceIds and lastVerified fields in data/game.ts.
          </p>
        </div>
      </section>

      <section id="demo-price-specs" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Demo, price and PC specs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <FactCard fact={demo} />
          <FactCard fact={price} />
          <FactCard fact={specs} />
        </div>
      </section>

      <section id="update-policy" className="prose-horror space-y-5">
        <h2>Update policy</h2>
        <p>
          Use official sources first, then reputable media reports for context. Rumors can be tracked, but they must stay labeled as Rumor and should never replace a confirmed fact.
        </p>
        <div className="flex flex-wrap gap-2">
          {officialSources.map((source) => (
            <SourceBadge key={source.id} source={source} />
          ))}
        </div>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/release-date")} />
    </ArticleLayout>
  );
}
