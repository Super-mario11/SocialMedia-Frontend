import SectionHeader from "./SectionHeader.jsx";

function PricingTeaseSection({ onSubscribe }) {
  return (
    <section id="pricing" className="pt-8">
      <SectionHeader
        eyebrow="Pricing"
        title="One Premium Plan"
        subtitle="Simple monthly access, cancel anytime."
      />

      <div className="rounded-3xl border border-rose-300/40 bg-gradient-to-br from-rose-100 to-white p-5 lg:mx-auto lg:max-w-3xl lg:p-7 dark:from-rose-500/20 dark:to-slate-800">
        <p className="text-base font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-200">Premium Membership</p>
        <p className="mt-2 text-5xl font-bold text-slate-900 dark:text-white">
          $14<span className="text-lg font-medium text-slate-600 dark:text-slate-300">/month</span>
        </p>

        <ul className="mt-4 space-y-2 text-base text-slate-700 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:space-y-0 dark:text-slate-200">
          <li>Full unlock of all premium posts</li>
          <li>New exclusive media every week</li>
          <li>Priority access to updates</li>
          <li>Cancel anytime, no long-term contract</li>
        </ul>

        <button
          type="button"
          onClick={onSubscribe}
          className="mt-5 w-full rounded-xl bg-rose-500 px-4 py-3 text-base font-semibold text-white transition active:scale-[0.99]"
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

export default PricingTeaseSection;
