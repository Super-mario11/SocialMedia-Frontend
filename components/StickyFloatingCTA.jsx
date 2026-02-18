function StickyFloatingCTA({ onUnlock }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <button
        type="button"
        onClick={onUnlock}
        className="pointer-events-auto mx-auto block w-full max-w-md rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-rose-500/40 dark:shadow-rose-950/60 lg:max-w-sm"
      >
        Unlock Premium Content
      </button>
    </div>
  );
}

export default StickyFloatingCTA;
