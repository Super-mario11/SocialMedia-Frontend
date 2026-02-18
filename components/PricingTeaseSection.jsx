import SectionHeader from "./SectionHeader.jsx";

function PricingTeaseSection({ onSubscribe }) {
  return (
    <section id="pricing" className="pt-8">
      <SectionHeader
        eyebrow="Pricing"
        title="One Premium Plan"
        subtitle="Simple monthly access, cancel anytime."
      />

      <div className="rounded-3xl border border-rose-300/30 bg-gradient-to-br from-rose-500/20 to-zinc-900 p-5 lg:mx-auto lg:max-w-3xl lg:p-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-200">Premium Membership</p>
        <p className="mt-2 text-4xl font-bold text-white">
          $14<span className="text-base font-medium text-zinc-300">/month</span>
        </p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-200 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:space-y-0">
          <li>Full unlock of all premium posts</li>
          <li>New exclusive media every week</li>
          <li>Priority access to updates</li>
          <li>Cancel anytime, no long-term contract</li>
        </ul>

        <button
          type="button"
          onClick={onSubscribe}
          className="mt-5 w-full rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.99]"
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

export default PricingTeaseSection;
