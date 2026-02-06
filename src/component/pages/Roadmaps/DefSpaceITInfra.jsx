import HeroSection from "./common/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./common/RoadmapSection";
import CTASection from "./common/CTASection";
import { defSpace, defSpaceInfraRoadmap } from "./data/defSpace";

const DefSpace = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={defSpace} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection data={defSpaceInfraRoadmap} />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default DefSpace;
