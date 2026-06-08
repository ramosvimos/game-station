import type { Fact } from "@/data/game";
import { getSources } from "@/lib/sources";
import { SourceBadge } from "@/components/SourceBadge";
import { StatusBadge } from "@/components/StatusBadge";

export function FactCard({ fact }: { fact: Fact }) {
  const factSources = getSources(fact.sourceIds);

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-horror backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">{fact.label}</p>
          <p className="mt-3 text-xl font-semibold text-bone">{fact.value}</p>
        </div>
        <StatusBadge status={fact.status} />
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="mb-3 text-xs text-stone-500">Last verified: {fact.lastVerified}</p>
        <div className="flex flex-wrap gap-2">
          {factSources.map((source) => (
            <SourceBadge key={source.id} source={source} />
          ))}
        </div>
      </div>
    </article>
  );
}
