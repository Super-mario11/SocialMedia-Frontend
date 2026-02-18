function ActionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-4 sm:items-center sm:justify-center">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/15 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Premium Content Locked</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Sign in with Google and unlock the full private gallery instantly.
        </p>
        <div className="mt-4 space-y-2">
          <a
            href="/api/auth/google/start"
            className="block w-full rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-900"
          >
            Login with Google
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/20 dark:text-white"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActionModal;
