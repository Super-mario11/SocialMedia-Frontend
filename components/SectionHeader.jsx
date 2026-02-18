function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </header>
  );
}

export default SectionHeader;
