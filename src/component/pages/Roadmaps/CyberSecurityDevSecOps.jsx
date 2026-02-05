import HeroSection from "./cybersecurity/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./cybersecurity/RoadmapSection";
import CTASection from "./common/CTASection";

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
