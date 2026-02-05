import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import RoadmapSection from "./sections/RoadmapSection";
import CTASection from "./sections/CTASection";

const CyberSecurity = () => {
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

export default CyberSecurity;
