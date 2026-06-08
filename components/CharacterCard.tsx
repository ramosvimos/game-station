import type { Character } from "@/data/game";
import { getSources } from "@/lib/sources";
import { SourceBadge } from "@/components/SourceBadge";

const spoilerStyles: Record<Character["spoilerLevel"], string> = {
  none: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  light: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  heavy: "border-red-400/30 bg-red-400/10 text-red-200"
};

export function CharacterCard({ character }: { character: Character }) {
  const characterSources = getSources(character.sourceIds);

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{character.name}</h2>
          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-red-200">{character.role}</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${spoilerStyles[character.spoilerLevel]}`}>
          {character.spoilerLevel} spoilers
        </span>
      </div>
      <p className="mt-4 leading-7 text-stone-300">{character.description}</p>
      {character.lastVerified ? <p className="mt-4 text-xs text-stone-500">Last verified: {character.lastVerified}</p> : null}
      {characterSources.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {characterSources.map((source) => (
            <SourceBadge key={source.id} source={source} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
