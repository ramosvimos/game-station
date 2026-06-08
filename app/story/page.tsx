import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceBadge } from "@/components/SourceBadge";
import { lastUpdated, relatedLinks, storyGuide } from "@/data/game";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata, longTailKeywords } from "@/lib/seo";
import { getSources } from "@/lib/sources";

const title = "Resident Evil Code Veronica Remake Story – Beginner-Friendly Spoiler Guide";
const description =
  "A beginner-friendly Resident Evil Code Veronica Remake story guide covering Claire Redfield, Chris Redfield, Umbrella and Rockfort Island with spoiler-light and spoiler-full sections.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/story",
  keywords: ["Resident Evil Code Veronica Remake story", "Claire Redfield Rockfort Island", ...longTailKeywords],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Story", href: "/story" }
];

const toc = [
  { id: "spoiler-light", label: "Spoiler-light story" },
  { id: "spoiler-full", label: "Spoiler-full context" },
  { id: "beginner-notes", label: "Beginner notes" },
  { id: "sources", label: "Story sources" }
];

export default function StoryPage() {
  const sources = getSources(storyGuide.sourceIds);

  return (
    <ArticleLayout
      eyebrow="Story guide"
      title="Resident Evil Code Veronica Remake Story"
      description="A spoiler-controlled primer for players who did not play the original Code: Veronica."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), articleJsonLd({ headline: title, description, path: "/story", dateModified: lastUpdated })]} />

      <section id="spoiler-light" className="prose-horror space-y-5">
        <h2>Spoiler-light story</h2>
        <div className="rounded-3xl border border-emerald-300/20 bg-emerald-950/20 p-5">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Safe for new players</p>
          <p className="mt-3 text-stone-300">{storyGuide.spoilerLight}</p>
        </div>
      </section>

      <section id="spoiler-full" className="prose-horror space-y-5">
        <h2>Spoiler-full context</h2>
        <div className="rounded-3xl border border-red-300/20 bg-red-950/20 p-5">
          <p className="text-sm uppercase tracking-[0.25em] text-red-200">Contains original-game spoilers</p>
          <p className="mt-3 text-stone-300">{storyGuide.spoilerFull}</p>
        </div>
      </section>

      <section id="beginner-notes" className="prose-horror space-y-5">
        <h2>Beginner notes</h2>
        <p>
          The safest beginner framing is simple: Claire Redfield is searching for Chris Redfield, Umbrella remains a major threat, and Rockfort Island becomes a survival horror location after a biological disaster.
        </p>
        <p>
          The remake may revise scenes, pacing and character presentation, but this page does not assume scene-by-scene changes until official details are published.
        </p>
      </section>

      <section id="sources" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Story sources</h2>
        <p className="text-stone-300">Last verified: {storyGuide.lastVerified}</p>
        <div className="flex flex-wrap gap-2">
          {sources.map((source) => (
            <SourceBadge key={source.id} source={source} />
          ))}
        </div>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/story")} />
    </ArticleLayout>
  );
}
