import HeroSection from "./businessai/HeroSection";
import RoadmapSection from "./businessai/RoadmapSection";
import CTASection from "./common/CTASection";
import FeaturesSection from "./common/FeaturesSection";

const BusinessAI = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default BusinessAI;
