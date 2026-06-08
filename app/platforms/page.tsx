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

const title = "Resident Evil Code Veronica Remake Platforms – PC, PS5, Xbox and Switch 2";
const description =
  "Confirmed and tracked Resident Evil Code Veronica Remake platforms, including PC via Steam, PlayStation 5, Xbox Series X|S and Nintendo Switch 2.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/platforms",
  keywords: ["Resident Evil Code Veronica Remake platforms", "Resident Evil Veronica PC", "Resident Evil Veronica Steam", ...longTailKeywords],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Platforms", href: "/platforms" }
];

const toc = [
  { id: "confirmed-platforms", label: "Confirmed platforms" },
  { id: "steam-status", label: "Steam status" },
  { id: "platform-watchlist", label: "Platform watchlist" }
];

const platformCards = [
  { name: "PC via Steam", detail: "Steam store page is live and lists a planned 2027 release.", sourceIds: ["steam-store"] },
  { name: "PlayStation 5", detail: "Tracked official/media sources list PS5 as an announced platform.", sourceIds: ["capcom-official", "gematsu"] },
  { name: "Xbox Series X|S", detail: "Tracked official/media sources list Xbox Series X|S as an announced platform.", sourceIds: ["capcom-official", "gematsu", "xbox-wire"] },
  { name: "Nintendo Switch 2", detail: "Tracked official/media sources list Nintendo Switch 2 as an announced platform.", sourceIds: ["capcom-official", "gematsu"] }
];

export default function PlatformsPage() {
  const platforms = quickFacts.find((fact) => fact.label === "Platforms")!;
  const steam = quickFacts.find((fact) => fact.label === "Steam page")!;

  return (
    <ArticleLayout
      eyebrow="Platform tracker"
      title="Resident Evil Code Veronica Remake Platforms"
      description="A source-backed platform page for PC, Steam, PlayStation 5, Xbox Series X|S and Nintendo Switch 2."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), articleJsonLd({ headline: title, description, path: "/platforms", dateModified: lastUpdated })]} />

      <section id="confirmed-platforms" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Confirmed platforms</h2>
        <FactCard fact={platforms} />
        <div className="grid gap-4 md:grid-cols-2">
          {platformCards.map((platform) => {
            const sources = getSources(platform.sourceIds);

            return (
              <article key={platform.name} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                <p className="mt-3 leading-7 text-stone-300">{platform.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sources.map((source) => (
                    <SourceBadge key={source.id} source={source} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="steam-status" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Steam status</h2>
        <FactCard fact={steam} />
        <p className="leading-8 text-stone-300">
          This template originally supported a placeholder state such as “Steam page not tracked yet.” The MVP data has been updated to the source-backed state: the Steam page is tracked.
        </p>
      </section>

      <section id="platform-watchlist" className="prose-horror space-y-5">
        <h2>Platform watchlist</h2>
        <p>
          Add platform-specific store pages as they appear. Keep preorder, edition, performance-mode and physical-release details marked Unknown until official pages publish them.
        </p>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/platforms")} />
    </ArticleLayout>
  );
}
