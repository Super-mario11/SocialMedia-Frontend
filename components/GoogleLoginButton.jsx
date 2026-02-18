function GoogleLoginButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = "/api/auth/google/start";
      }}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/20"
    >
      Login with Google
    </button>
  );
}

export default GoogleLoginButton;
