import SectionHeader from "./SectionHeader.jsx";

function SocialProofSection({ subscribersCount, testimonials, activity }) {
  return (
    <section id="social-proof" className="pt-8">
      <SectionHeader
        eyebrow="Social Proof"
        title="People Are Joining Every Day"
        subtitle="Built to increase trust quickly from Instagram traffic."
      />

      <div className="grid gap-3 lg:grid-cols-[1.2fr,2fr]">
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400">Active Subscribers</p>
          <p className="mt-1 text-3xl font-bold text-white">{subscribersCount.toLocaleString()}</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {activity.map((entry) => (
              <li key={entry} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-400" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {testimonials.map((item) => (
            <article key={item.id} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
              <p className="text-sm text-zinc-100">"{item.quote}"</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">{item.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
