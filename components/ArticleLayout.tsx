import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TableOfContents } from "@/components/TableOfContents";

type TocItem = {
  id: string;
  label: string;
};

type ArticleLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  breadcrumbs: BreadcrumbItem[];
  toc?: TocItem[];
  children: ReactNode;
};

export function ArticleLayout({ eyebrow, title, description, updated, breadcrumbs, toc = [], children }: ArticleLayoutProps) {
  return (
    <main>
      <section className="border-b border-white/10 bg-radial-blood">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-red-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">{description}</p>
          <p className="mt-5 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-stone-300">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
        <div className="min-w-0 space-y-10">{children}</div>
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents items={toc} />
          </div>
        </div>
      </section>
    </main>
  );
}
