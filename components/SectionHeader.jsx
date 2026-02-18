function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{eyebrow}</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-zinc-300">{subtitle}</p> : null}
    </header>
  );
}

export default SectionHeader;
