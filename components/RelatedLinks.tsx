import Link from "next/link";

type RelatedLink = {
  label: string;
  href: string;
  description?: string;
};

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/50 to-violet-950/30 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-red-200">Related pages</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-red-300/40 hover:bg-black/40">
            <span className="font-semibold text-white">{link.label}</span>
            {link.description ? <span className="mt-1 block text-sm text-stone-400">{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
