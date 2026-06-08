import { getSources } from "@/lib/sources";
import { SourceBadge } from "@/components/SourceBadge";
import { StatusBadge } from "@/components/StatusBadge";

type TrailerEmbedProps = {
  title: string;
  youtubeId?: string;
  url?: string;
  status: "confirmed" | "unknown";
  sourceIds: string[];
  lastVerified: string;
};

export function TrailerEmbed({ title, youtubeId, url, status, sourceIds, lastVerified }: TrailerEmbedProps) {
  const trailerSources = getSources(sourceIds);

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-horror">
      {youtubeId ? (
        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center bg-gradient-to-br from-red-950 via-stone-950 to-violet-950 p-8 text-center">
          <div className="text-5xl" aria-hidden="true">
            🎬
          </div>
          <h2 className="mt-5 text-2xl font-bold text-white">Official trailer placeholder</h2>
          <p className="mt-3 max-w-xl text-stone-300">
            Add an official YouTube video ID to data/game.ts when a verified source is available.
          </p>
        </div>
      )}

      <div className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Trailer</p>
            <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
          </div>
          <StatusBadge status={status} />
        </div>
        <p className="mt-3 text-sm text-stone-400">Last verified: {lastVerified}</p>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold text-red-200 hover:text-red-100">
            Open official trailer source
          </a>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {trailerSources.map((source) => (
            <SourceBadge key={source.id} source={source} />
          ))}
        </div>
      </div>
    </article>
  );
}
