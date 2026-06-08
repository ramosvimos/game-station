export function NewsletterCTA() {
  return (
    <section className="rounded-3xl border border-red-300/20 bg-red-950/30 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-red-200">Newsletter placeholder</p>
      <h2 className="mt-3 text-2xl font-bold text-white">Track official updates without doomscrolling</h2>
      <p className="mt-3 text-stone-300">
        This MVP does not store emails. Replace this static placeholder with your preferred newsletter provider when you are ready.
      </p>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row" aria-label="Newsletter placeholder form">
        <input
          type="email"
          placeholder="you@example.com"
          disabled
          className="min-h-12 flex-1 rounded-full border border-white/10 bg-black/40 px-5 text-stone-400 outline-none"
        />
        <button type="button" disabled className="min-h-12 rounded-full bg-stone-700 px-6 font-semibold text-stone-300">
          Coming later
        </button>
      </form>
    </section>
  );
}
