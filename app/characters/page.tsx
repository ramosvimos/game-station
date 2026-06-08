import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CharacterCard } from "@/components/CharacterCard";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { characters, lastUpdated, relatedLinks } from "@/data/game";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata, longTailKeywords } from "@/lib/seo";

const title = "Resident Evil Code Veronica Remake Characters – Claire, Chris, Steve, Wesker and Ashford";
const description =
  "Beginner-friendly character cards for Resident Evil Code Veronica Remake, including Claire Redfield, Chris Redfield, Steve Burnside, Albert Wesker, Alfred Ashford and Alexia Ashford.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/characters",
  keywords: ["Resident Evil Code Veronica Remake characters", "Claire Redfield", "Chris Redfield", ...longTailKeywords],
  type: "article"
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Characters", href: "/characters" }
];

const toc = [
  { id: "character-cards", label: "Character cards" },
  { id: "spoiler-levels", label: "Spoiler levels" }
];

export default function CharactersPage() {
  return (
    <ArticleLayout
      eyebrow="Character guide"
      title="Resident Evil Code Veronica Remake Characters"
      description="A beginner-friendly cast guide with spoiler levels and source-backed descriptions."
      updated={lastUpdated}
      breadcrumbs={breadcrumbs}
      toc={toc}
    >
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), articleJsonLd({ headline: title, description, path: "/characters", dateModified: lastUpdated })]} />

      <section id="character-cards" className="space-y-5">
        <h2 className="text-3xl font-bold text-white">Character cards</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </div>
      </section>

      <section id="spoiler-levels" className="prose-horror space-y-5">
        <h2>Spoiler levels</h2>
        <p>
          “None” means basic identity-only context. “Light” means setup-level context that appears in store descriptions or early story summaries. “Heavy” means the character's full role can spoil major original-game story turns.
        </p>
      </section>

      <RelatedLinks links={relatedLinks.filter((link) => link.href !== "/characters")} />
    </ArticleLayout>
  );
}
