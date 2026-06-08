import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TrailerEmbed } from "@/components/TrailerEmbed";
import { lastUpdated, officialTrailer, relatedLinks } from "@/data/game";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata, longTailKeywords } from "@/lib/seo";

const title = "Resident Evil Code Veronica Remake Trailer – Official Reveal and Embed";
const description =
  "Watch and track the Resident Evil Code Veronica Remake trailer with a source-backed YouTube embed, official trailer URL and placeholder fallback.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/trailer",
  keywords: ["Resident Evil Code Veronica Remake trailer", "Resident Evil Veronica trailer", ...longTailKeywords],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Trailer", href: "/trailer" }
];

const toc = [
  { id: "official-trailer", label: "Official trailer" },
  { id: "embed-policy", label: "Embed policy" },
  { id: "future-breakdown", label: "Future trailer breakdown" }
];

export default function TrailerPage() {
  return (
    <ArticleLayout
      eyebrow="Trailer tracker"
      title="Resident Evil Code Veronica Remake Trailer"
      description="The trailer component supports an official YouTube embed when a verified ID exists and falls back to a placeholder card when it does not."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), articleJsonLd({ headline: title, description, path: "/trailer", dateModified: lastUpdated })]} />

      <section id="official-trailer" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Official trailer</h2>
        <TrailerEmbed {...officialTrailer} />
      </section>

      <section id="embed-policy" className="prose-horror space-y-5">
        <h2>Embed policy</h2>
        <p>
          This template uses a YouTube no-cookie embed and links to the source URL. Do not upload, mirror or rehost official trailers or copyrighted footage as local assets.
        </p>
        <p>
          If the official video changes, update the youtubeId, url, sourceIds and lastVerified fields in data/game.ts.
        </p>
      </section>

      <section id="future-breakdown" className="prose-horror space-y-5">
        <h2>Future trailer breakdown</h2>
        <p>
          Trailer breakdown articles can be added later, but avoid claiming gameplay mechanics, enemy rosters or story changes unless they are clearly shown or confirmed by source-backed information.
        </p>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/trailer")} />
    </ArticleLayout>
  );
}
