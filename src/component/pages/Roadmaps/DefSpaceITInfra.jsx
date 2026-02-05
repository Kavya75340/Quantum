import HeroSection from "./defspace/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./defspace/RoadmapSection";
import CTASection from "./common/CTASection";

const DefSpace = () => {
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

export default DefSpace;
