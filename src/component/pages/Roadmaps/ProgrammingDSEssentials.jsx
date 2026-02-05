import HeroSection from "./programmingds/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./programmingds/RoadmapSection";
import CTASection from "./common/CTASection";

const ProgrammingDS = () => {
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

export default ProgrammingDS;
