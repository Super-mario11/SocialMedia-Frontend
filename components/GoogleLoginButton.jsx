function GoogleLoginButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = "/api/auth/google/start";
      }}
      className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
    >
      Login with Google
    </button>
  );
}

export default GoogleLoginButton;
