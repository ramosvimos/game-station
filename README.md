# Veronica Hub

Veronica Hub is a beginner-friendly, source-first English information hub for **Resident Evil Code Veronica Remake / Resident Evil Veronica**. It is built as a static SEO MVP for Vercel and is designed to cover release date, platforms, trailer, story, characters, remake-vs-original details, FAQ and sources without pretending to be an official website.

> Veronica Hub is an independent fan-made information site and is not affiliated with or endorsed by Capcom.

The project intentionally does **not** use Capcom logos, Resident Evil official logos or copyrighted screenshots as default assets. The default design uses custom gradients, CSS cards, emoji and abstract horror-style SVG assets.

## Tech stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Content: TypeScript data files in `data/*.ts` plus optional draft MDX in `content/articles/*.mdx`
- Deployment target: Vercel
- SEO: Next Metadata API, `sitemap.ts`, `robots.ts`, canonical URLs, OpenGraph metadata, Twitter card metadata and JSON-LD
- Analytics placeholder: optional Google Analytics via `NEXT_PUBLIC_GA_ID`; Vercel Analytics can be added later
- Database: none for MVP
- Authentication: none for MVP

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

Optional type check:

```bash
npm run typecheck
```

## Deploy to Vercel

1. Push the repository to GitHub, GitLab or Bitbucket.
2. Import the repository in Vercel.
3. Keep the framework preset as **Next.js**.
4. Use the default install/build commands:
   - Install: `npm install`
   - Build: `npm run build`
5. Add environment variables only if needed:
   - `NEXT_PUBLIC_GA_ID` for Google Analytics placeholder
   - `NEXT_PUBLIC_SITE_URL` if you later adapt `siteConfig.domain` to read from env
6. Deploy.
7. After launch, submit `https://veronicahub.com/sitemap.xml` to Google Search Console.

## Project structure

```txt
veronica-hub/
├── app/
│   ├── characters/page.tsx
│   ├── faq/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── platforms/page.tsx
│   ├── release-date/page.tsx
│   ├── remake-vs-original/page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── sources/page.tsx
│   ├── story/page.tsx
│   └── trailer/page.tsx
├── components/
│   ├── AnalyticsPlaceholder.tsx
│   ├── ArticleLayout.tsx
│   ├── Breadcrumbs.tsx
│   ├── CharacterCard.tsx
│   ├── ComparisonTable.tsx
│   ├── FAQAccordion.tsx
│   ├── FactCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── JsonLd.tsx
│   ├── NewsletterCTA.tsx
│   ├── QuickFacts.tsx
│   ├── RelatedLinks.tsx
│   ├── SourceBadge.tsx
│   ├── StatusBadge.tsx
│   ├── TableOfContents.tsx
│   ├── TrailerEmbed.tsx
│   └── UpdateTimeline.tsx
├── content/articles/
│   ├── story-primer.mdx
│   └── trailer-breakdown-template.mdx
├── data/
│   ├── game.ts
│   └── site.ts
├── lib/
│   ├── game-data.ts
│   ├── jsonld.ts
│   ├── navigation.ts
│   ├── seo.ts
│   └── sources.ts
├── public/
│   ├── favicon.svg
│   └── og-default.svg
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## How to update game information

Most site content is in `data/game.ts`.

### Add or update a source

Update the `sources` array:

```ts
{
  id: "example-source",
  name: "Example Source Name",
  url: "https://example.com/article",
  type: "official",
  lastChecked: "2026-06-08",
  reliability: "high"
}
```

Use these rules:

- Prefer official sources for confirmed facts.
- Use reputable media sources for context or reporting.
- Use database sources for store metadata, app IDs, release windows and platform listings.
- Use community sources only for community discussion, not confirmed factual claims.
- Use SEO tools for search demand and performance tracking, not game facts.
- Do not scrape sites that disallow scraping.
- Do not automate Google Trends or Google Search Console in the MVP; review manually.
- Do not use YouTube scraping. If you automate later, use the official YouTube Data API and follow the API terms.

### Add or update a fact

Update `quickFacts`:

```ts
{
  label: "Exact release date",
  value: "No exact release date has been confirmed yet.",
  status: "unknown",
  sourceIds: ["steam-store", "capcom-official"],
  lastVerified: "2026-06-08"
}
```

Rules:

- `confirmed`: official/store source directly supports it.
- `reported`: reputable media reports it, but official source is not tracked yet.
- `rumor`: leak, insider claim, community speculation or unverified report.
- `unknown`: not confirmed, not tracked or not yet available.

Do not invent exact release dates, pricing, system requirements, demo status, editions or preorder bonuses.

### Update sourceIds

Every source-backed object uses `sourceIds`. The IDs must match records in the `sources` array.

Examples:

```ts
sourceIds: ["capcom-official", "steam-store"]
sourceIds: ["capcom-youtube"]
sourceIds: ["gamesradar", "gematsu"]
```

If a source is removed or renamed, update all matching `sourceIds` to avoid empty source badges.

## How to add a new page

1. Create a new route, for example:

```txt
app/news/page.tsx
```

2. Add metadata with `buildMetadata` from `lib/seo.ts`.
3. Add breadcrumbs and JSON-LD with helpers from `lib/jsonld.ts`.
4. Add the page to `lib/navigation.ts` if it should appear in the header.
5. Add it to `app/sitemap.ts` by including it in navigation or extending the sitemap list.
6. Add source-backed data to `data/game.ts` or a new data file.
7. Keep the page readable and avoid keyword stuffing.

## How to add a new article

The MVP includes draft MDX files in `content/articles/*.mdx`, but it does not render MDX pages yet.

Recommended article workflow:

1. Create a draft file:

```txt
content/articles/my-article.mdx
```

2. Add front matter:

```mdx
---
title: "Article Title"
slug: "my-article"
description: "Short SEO description."
status: "draft"
lastVerified: "2026-06-08"
sourceIds:
  - "capcom-official"
  - "steam-store"
---
```

3. Add spoiler warnings where needed.
4. Add only source-backed claims.
5. Later, add an MDX renderer or migrate content to Sanity, Contentful, Strapi or Payload CMS.

## Data source standards

Every factual item should support:

- Source name
- Source URL
- Source type
- Last checked date
- Reliability label or score
- Source IDs on the relevant fact/update/FAQ/comparison row
- Last verified date on facts and comparison rows

Reliability scoring in the UI is mapped from labels:

- `high` = 90/100
- `medium` = 70/100
- `low` = 45/100

This is an editorial trust label, not an automated scoring system.

## SEO checklist

- Unique title on every page
- Unique description on every page
- Canonical URL via Next Metadata API
- OpenGraph metadata
- Twitter card metadata
- `sitemap.xml` generated by `app/sitemap.ts`
- `robots.txt` generated by `app/robots.ts`
- JSON-LD:
  - `WebSite` in root layout
  - `BreadcrumbList` on pages
  - `FAQPage` on `/faq`
  - `Article` on article-like pages
- Internal links between related pages
- External links use `target="_blank"` and `rel="noopener noreferrer"`
- All local SVG assets include accessible labels or metadata alt text in metadata
- No keyword stuffing
- Page copy stays natural and beginner-friendly
- Unknown information stays labeled Unknown
- Rumors stay labeled Rumor

## Content and legal rules

Do:

- Use official and reputable sources.
- Use short summaries and original writing.
- Link to sources clearly.
- Use custom CSS graphics, gradients and abstract horror art.
- Keep the Capcom affiliation disclaimer in the footer.

Do not:

- Pretend Veronica Hub is official.
- Use Capcom logos, Resident Evil official logos or copyrighted screenshots as default assets.
- Provide ROMs, ISOs, emulator downloads, cracks, bypasses or piracy links.
- Claim a precise date, price, demo, system requirement or edition unless confirmed by a tracked source.
- Scrape or automate tools in ways that violate ToS.

## Analytics placeholder

Google Analytics can be enabled by setting:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The component is `components/AnalyticsPlaceholder.tsx`.

For Vercel Analytics later:

```bash
npm install @vercel/analytics
```

Then add the official Vercel Analytics component to `app/layout.tsx` following Vercel's current documentation.

## Roadmap

### Phase 1: Static SEO hub

- Complete homepage, release date, platforms, trailer, story, characters, FAQ and sources.
- Use manual data updates.
- Submit sitemap to Google Search Console.

### Phase 2: Content expansion

- Add news page.
- Add guides page.
- Add story explained articles.
- Add remake vs original deep comparison.
- Add trailer breakdown.
- Add newsletter signup placeholder.

### Phase 3: Trend tracking

- Use Google Trends manual or semi-automated keyword tracking.
- Use Google Search Console to monitor impressions, clicks, CTR and average position.
- Use SteamDB to observe followers, wishlist trend and release changes.
- Use YouTube Data API to track official trailer video search results and publish time.
- Do not violate any website ToS.

### Phase 4: Multi-game expansion

- Expand from Veronica Hub into a horror remake / survival horror games hub.
- Potential new routes:
  - `/games`
  - `/games/resident-evil-requiem`
  - `/games/alien-isolation-2`
  - `/games/ill`
  - `/games/onimusha-way-of-the-sword`
- Keep the homepage focused on Resident Evil Code Veronica Remake at first to avoid diluting topical relevance.

## Copyright / disclaimer

Veronica Hub is an independent fan-made information site and is not affiliated with or endorsed by Capcom.

All trademarks belong to their respective owners. This project template ships with custom abstract SVG/CSS artwork only and does not include official logos, official screenshots, ROMs, ISOs, emulator downloads, cracks or unauthorized game assets.
