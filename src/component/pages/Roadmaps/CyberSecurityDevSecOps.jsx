import HeroSection from "./common/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./common/RoadmapSection";
import CTASection from "./common/CTASection";
import { cybersecurity, cybersecurityRoadmap } from "./data/cybersecurity";

const CyberSecurity = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={cybersecurity} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection data={cybersecurityRoadmap} />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default CyberSecurity;
