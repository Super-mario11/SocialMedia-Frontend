import { useEffect, useState } from "react";
import ActionModal from "../components/ActionModal.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import FinalCTASection from "../components/FinalCTASection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import LockedContentPreview from "../components/LockedContentPreview.jsx";
import PricingTeaseSection from "../components/PricingTeaseSection.jsx";
import SocialProofSection from "../components/SocialProofSection.jsx";
import StickyFloatingCTA from "../components/StickyFloatingCTA.jsx";
import { creator, features, recentActivity, teaserPosts, testimonials } from "../utils/mockData.js";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="scroll-smooth">
      <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-8 pt-4 md:px-6 lg:px-8">
        <nav className="sticky top-3 z-30 mb-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
            Premium Access
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#preview"
              className="font-medium transition hover:text-slate-900 active:text-slate-900 dark:hover:text-white dark:active:text-white"
            >
              Preview
            </a>
            <a
              href="#pricing"
              className="font-medium transition hover:text-slate-900 active:text-slate-900 dark:hover:text-white dark:active:text-white"
            >
              Pricing
            </a>
            <a
              href="#final-cta"
              className="font-medium transition hover:text-slate-900 active:text-slate-900 dark:hover:text-white dark:active:text-white"
            >
              Join
            </a>
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-700 transition dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
              role="switch"
              aria-checked={isDark}
              aria-label="Toggle dark mode"
            >
              <span>{isDark ? "Dark On" : "Light On"}</span>
              <span
                className={`relative h-5 w-9 rounded-full transition ${
                  isDark ? "bg-rose-500/80" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                    isDark ? "left-4" : "left-0.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        <HeroSection creator={creator} onUnlock={() => setIsModalOpen(true)} />

        <LockedContentPreview posts={teaserPosts} onOpen={() => setIsModalOpen(true)} />

        <FeaturesSection items={features} />

        <SocialProofSection
          subscribersCount={creator.subscribersCount}
          testimonials={testimonials}
          activity={recentActivity}
        />

        <PricingTeaseSection onSubscribe={() => setIsModalOpen(true)} />

        <FinalCTASection onUnlock={() => setIsModalOpen(true)} />
      </main>

      <StickyFloatingCTA onUnlock={() => setIsModalOpen(true)} />
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default LandingPage;
