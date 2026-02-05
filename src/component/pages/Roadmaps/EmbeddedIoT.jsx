import HeroSection from "./embedded/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./embedded/RoadmapSection";
import CTASection from "./common/CTASection";

const Embedded = () => {
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

export default Embedded;
