import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
};

export function Hero({ title, subtitle, lastUpdated }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-radial-blood">
      <div className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-red-700/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-950/50 px-4 py-2 text-sm text-red-100">
            <span className="h-2 w-2 rounded-full bg-red-300 shadow-[0_0_20px_rgba(252,165,165,0.8)]" />
            Last updated: {lastUpdated}
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/release-date" className="rounded-full bg-red-500 px-6 py-3 font-semibold text-white shadow-horror transition hover:bg-red-400">
              Release Date
            </Link>
            <Link href="/trailer" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Watch Trailer
            </Link>
            <Link href="/story" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Read Story Guide
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-horror backdrop-blur">
          <div className="absolute inset-6 rounded-[1.5rem] border border-red-400/20" />
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-red-950/80 via-stone-950 to-violet-950/70 p-8">
            <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-stone-400">
              <span>Survival Horror</span>
              <span>Source-first</span>
            </div>
            <div className="my-12">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-red-300/30 bg-black/30 text-6xl shadow-[0_0_60px_rgba(220,38,38,0.35)]" aria-hidden="true">
                🩸
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-200">Beginner-friendly hub</p>
              <p className="mt-3 text-2xl font-bold text-white">No official logos. No copyrighted screenshots. No fake dates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
