function HeroSection({ creator, onUnlock }) {
  return (
    <section id="hero" className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7 dark:border-white/10 dark:bg-slate-800">
      <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-rose-500/25 blur-3xl md:h-52 md:w-52" />
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl md:h-56 md:w-56" />

      <div className="relative md:grid md:grid-cols-[220px,1fr] md:items-center md:gap-8">
        <img
          src={creator.avatar}
          alt={`${creator.name} profile`}
          width="112"
          height="112"
          className="mx-auto h-28 w-28 rounded-full object-cover ring-2 ring-white/80 md:h-48 md:w-48"
          loading="eager"
        />
        <div>
          <h1 className="mt-4 text-center text-3xl font-bold tracking-tight md:mt-0 md:text-left md:text-5xl">
            {creator.name}
          </h1>
          <p className="mt-2 text-center text-base text-slate-600 md:text-left md:text-lg dark:text-slate-300">
            {creator.tagline}
          </p>
          <p className="mt-2 text-center text-sm text-slate-500 md:text-left md:text-base dark:text-slate-400">
            {creator.bio}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 md:max-w-sm">
            <div className="rounded-2xl bg-slate-100 p-3 text-center dark:bg-white/5">
              <p className="text-lg font-semibold">{creator.postsCount}</p>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Posts</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-3 text-center dark:bg-white/5">
              <p className="text-lg font-semibold">{creator.subscribersCount.toLocaleString()}</p>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Subscribers</p>
            </div>
          </div>

          <div className="mt-5 space-y-3 md:flex md:max-w-md md:gap-3 md:space-y-0">
            <a
              href="/api/auth/google/start"
              className="block w-full rounded-xl bg-white px-4 py-3 text-center text-base font-semibold text-zinc-900"
            >
              Login with Google
            </a>
            <button
              type="button"
              onClick={onUnlock}
              className="w-full rounded-xl bg-rose-500 px-4 py-3 text-base font-semibold text-white transition active:scale-[0.99]"
            >
              Unlock Premium Content
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
