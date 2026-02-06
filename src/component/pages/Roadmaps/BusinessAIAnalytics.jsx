import HeroSection from "./common/HeroSection";
import RoadmapSection from "./common/RoadmapSection";
import CTASection from "./common/CTASection";
import FeaturesSection from "./common/FeaturesSection";
import { businessAiData, businessAIRoadmap } from "./data/businessAiData";

const BusinessAI = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={businessAiData} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection data={businessAIRoadmap} />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default BusinessAI;
