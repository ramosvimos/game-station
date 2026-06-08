import type { Source } from "@/data/game";
import { reliabilityScore, sourceTypeLabel } from "@/lib/sources";

export function SourceBadge({ source }: { source: Source }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-stone-300 transition hover:border-red-400/50 hover:text-white"
      title={`${source.name} — last checked ${source.lastChecked}`}
    >
      <span className="truncate">{source.name}</span>
      <span className="hidden rounded-full bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-stone-400 sm:inline-flex">
        {sourceTypeLabel(source.type)} · {reliabilityScore(source.reliability)}/100
      </span>
    </a>
  );
}
