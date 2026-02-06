import HeroSection from "./common/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./common/RoadmapSection";
import CTASection from "./common/CTASection";
import { cloudDevOpsRoadmap, cloudEngineering } from "./data/cloudEngineering";

const CloudEngineering = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={cloudEngineering} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection data={cloudDevOpsRoadmap} />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default CloudEngineering;
