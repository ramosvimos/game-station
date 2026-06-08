import type { Metadata } from "next";
import Link from "next/link";
import { FactCard } from "@/components/FactCard";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { QuickFacts } from "@/components/QuickFacts";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TrailerEmbed } from "@/components/TrailerEmbed";
import { UpdateTimeline } from "@/components/UpdateTimeline";
import { latestUpdates, lastUpdated, officialTrailer, quickFacts, relatedLinks, storyGuide } from "@/data/game";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.defaultSeo.title,
  description: siteConfig.defaultSeo.description,
  path: "/",
  keywords: siteConfig.defaultSeo.keywords,
  type: "website"
});

export default function HomePage() {
  const highlightedFacts = quickFacts.filter((fact) =>
    ["Release window", "Platforms", "Exact release date"].includes(fact.label)
  );

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ label: "Home", href: "/" }])} />
      <Hero
        title="Resident Evil Code Veronica Remake"
        subtitle="Release date, platforms, trailer, story and latest news in one beginner-friendly hub."
        lastUpdated={lastUpdated}
      />

      <QuickFacts facts={quickFacts.slice(0, 8)} />
      <UpdateTimeline updates={latestUpdates} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8" id="what-is-resident-evil-code-veronica-remake">
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-red-300">Beginner guide</p>
          <h2 className="mt-3 text-3xl font-bold text-white">What is Resident Evil Code Veronica Remake?</h2>
          <div className="mt-5 space-y-4 leading-8 text-stone-300">
            <p>
              Resident Evil Veronica is a modern remake/reimagining of Resident Evil – Code: Veronica, a classic survival horror entry connected to Claire Redfield, Chris Redfield, Umbrella and the classic Resident Evil era.
            </p>
            <p>
              This site is written for players who have not played the original. It keeps confirmed information separate from expected changes and avoids pretending that unannounced details are facts.
            </p>
            <p>
              For deeper context, start with the <Link href="/story" className="text-red-200 underline decoration-red-300/40 underline-offset-4 hover:text-red-100">spoiler-light story guide</Link>, then use the <Link href="/remake-vs-original" className="text-red-200 underline decoration-red-300/40 underline-offset-4 hover:text-red-100">remake vs original comparison</Link> to track what is confirmed.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {highlightedFacts.map((fact) => (
            <FactCard key={fact.label} fact={fact} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="release-date-preview">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-red-300">Release Date</p>
            <h2 className="mt-3 text-3xl font-bold text-white">2027 window, no exact date yet</h2>
            <p className="mt-5 leading-8 text-stone-300">
              The current tracked release information is a 2027 window. Veronica Hub does not list a day/month release date until an official source confirms one.
            </p>
            <Link href="/release-date" className="mt-6 inline-flex rounded-full bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-400">
              Track release date
            </Link>
          </div>
          <div className="rounded-3xl border border-red-300/20 bg-red-950/30 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-red-200">Update box</p>
            <h2 className="mt-3 text-3xl font-bold text-white">What will change here later?</h2>
            <p className="mt-5 leading-8 text-stone-300">
              Add confirmed date, editions, preorder details, demo details and PC specs only after source-backed updates are added to data/game.ts.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8" id="platforms-preview">
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-red-300">Platforms</p>
          <h2 className="mt-3 text-3xl font-bold text-white">PC, PlayStation 5, Xbox Series X|S and Nintendo Switch 2</h2>
          <p className="mt-5 leading-8 text-stone-300">
            The project tracks store and platform pages separately so the site can flag Steam, console pages and platform-specific details without guessing.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["PC via Steam", "PlayStation 5", "Xbox Series X|S", "Nintendo Switch 2"].map((platform) => (
              <div key={platform} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white">
                {platform}
              </div>
            ))}
          </div>
        </div>

        <TrailerEmbed {...officialTrailer} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="story-preview">
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-red-300">Story</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Claire, Chris, Umbrella and Rockfort Island</h2>
          <p className="mt-5 leading-8 text-stone-300">{storyGuide.spoilerLight}</p>
          <Link href="/story" className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10">
            Read story guide
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <RelatedLinks links={relatedLinks} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <NewsletterCTA />
      </section>
    </main>
  );
}
