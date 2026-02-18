function FinalCTASection({ onUnlock }) {
  return (
    <section id="final-cta" className="pb-24 pt-10 text-center">
      <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 lg:mx-auto lg:max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight">Unlock Exclusive Content Now</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-zinc-300">
          Join premium subscribers and access private photos, videos, and updates unavailable anywhere else.
        </p>
        <button
          type="button"
          onClick={onUnlock}
          className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition active:scale-[0.99]"
        >
          Unlock Premium Content
        </button>
      </div>
    </section>
  );
}

export default FinalCTASection;
