import HeroSection from "./cloudengineering/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./cloudengineering/RoadmapSection";
import CTASection from "./common/CTASection";

const CloudEngineering = () => {
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

export default CloudEngineering;
