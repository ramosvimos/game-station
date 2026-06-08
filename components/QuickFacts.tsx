import type { Fact } from "@/data/game";
import { FactCard } from "@/components/FactCard";

export function QuickFacts({ facts }: { facts: Fact[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="quick-facts">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-red-300">Quick Facts</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Source-backed status cards</h2>
        <p className="mt-4 text-stone-300">
          Every card stores source URLs, source names and a last verified date. Unknown items are deliberately not rewritten as confirmed facts.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {facts.map((fact) => (
          <FactCard key={fact.label} fact={fact} />
        ))}
      </div>
    </section>
  );
}
