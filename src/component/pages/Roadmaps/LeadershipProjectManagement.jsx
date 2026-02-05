import HeroSection from "./leadership/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./leadership/RoadmapSection";
import CTASection from "./common/CTASection";

const Leadership = () => {
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

export default Leadership;
