import type { UpdateItem } from "@/data/game";
import { getSources } from "@/lib/sources";
import { SourceBadge } from "@/components/SourceBadge";
import { StatusBadge } from "@/components/StatusBadge";

export function UpdateTimeline({ updates }: { updates: UpdateItem[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="latest-updates">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-red-300">Latest Updates</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Timeline</h2>
        <p className="mt-4 text-stone-300">
          Official updates are separated from media reports, rumors and site-maintenance notes.
        </p>
      </div>

      <div className="relative space-y-6 border-l border-red-900/60 pl-6">
        {updates.map((update) => {
          const updateSources = getSources(update.sourceIds);

          return (
            <article key={`${update.date}-${update.title}`} className="relative rounded-3xl border border-white/10 bg-black/35 p-5">
              <span className="absolute -left-[33px] top-7 h-4 w-4 rounded-full border border-red-300 bg-red-950 shadow-[0_0_24px_rgba(248,113,113,0.5)]" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <time className="font-mono text-sm text-red-200" dateTime={update.date}>
                  {update.date}
                </time>
                <StatusBadge status={update.tag} />
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{update.title}</h3>
              <p className="mt-2 text-stone-300">{update.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {updateSources.map((source) => (
                  <SourceBadge key={source.id} source={source} />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
