import { useState } from "react";
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

  return (
    <div className="scroll-smooth">
      <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-8 pt-4 md:px-6 lg:px-8">
        <nav className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/70 px-3 py-2 text-xs text-zinc-300 backdrop-blur">
          <span className="font-semibold text-zinc-100">Premium Access</span>
          <div className="flex gap-3">
            <a href="#preview" className="active:text-white">
              Preview
            </a>
            <a href="#pricing" className="active:text-white">
              Pricing
            </a>
            <a href="#final-cta" className="active:text-white">
              Join
            </a>
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
