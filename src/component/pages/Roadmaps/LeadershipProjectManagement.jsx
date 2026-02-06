import HeroSection from "./common/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./common/RoadmapSection";
import CTASection from "./common/CTASection";
import { leadership, leadershipProjectMgmtRoadmap } from "./data/leadership";

const Leadership = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={leadership} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection data={leadershipProjectMgmtRoadmap} />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default Leadership;
