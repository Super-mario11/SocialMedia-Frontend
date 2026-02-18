import SectionHeader from "./SectionHeader.jsx";

function FeatureIcon({ index }) {
  const variants = [
    "bg-rose-400/30",
    "bg-cyan-400/30",
    "bg-emerald-400/30",
    "bg-amber-300/30"
  ];
  return <span className={`inline-block h-3.5 w-3.5 rounded-full ${variants[index % variants.length]}`} aria-hidden="true" />;
}

function FeaturesSection({ items }) {
  return (
    <section id="features" className="pt-8">
      <SectionHeader
        eyebrow="Why Subscribe"
        title="Everything Is Built for Premium Access"
        subtitle="Fast updates, exclusive drops, and private content."
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {items.map((feature, index) => (
          <article key={feature.id} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-800/80">
            <FeatureIcon index={index} />
            <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
