function FinalCTASection({ onUnlock }) {
  return (
    <section id="final-cta" className="pb-24 pt-10 text-center">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 lg:mx-auto lg:max-w-3xl dark:border-white/10 dark:bg-slate-800">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Unlock Exclusive Content Now</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 dark:text-slate-300">
          Join premium subscribers and access private photos, videos, and updates unavailable anywhere else.
        </p>
        <button
          type="button"
          onClick={onUnlock}
          className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-base font-semibold text-zinc-900 transition active:scale-[0.99]"
        >
          Unlock Premium Content
        </button>
      </div>
    </section>
  );
}

export default FinalCTASection;
