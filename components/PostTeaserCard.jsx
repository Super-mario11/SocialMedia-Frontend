function PostTeaserCard({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left dark:border-white/10 dark:bg-slate-800"
      aria-label={`Unlock ${item.title}`}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="h-44 w-full object-cover blur-md transition duration-300 group-hover:blur-sm group-active:blur-sm md:h-48 lg:h-52"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-black/60 p-3 backdrop-blur-sm transition group-hover:scale-105">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 animate-pulse text-rose-200">
            <path d="M7 11V8a5 5 0 0 1 10 0v3" />
            <rect x="5" y="11" width="14" height="10" rx="2" />
          </svg>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3">
        <p className="truncate text-sm font-medium text-zinc-100">{item.title}</p>
        <p className="truncate text-xs text-zinc-300">{item.caption}</p>
      </div>
    </button>
  );
}

export default PostTeaserCard;
