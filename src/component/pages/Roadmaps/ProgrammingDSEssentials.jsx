import HeroSection from "./common/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./common/RoadmapSection";
import CTASection from "./common/CTASection";
import {
    programmingDataStructure,
    programmingDSARoadmap,
} from "./data/programmingDataStructure";

const ProgrammingDS = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={programmingDataStructure} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection data={programmingDSARoadmap} />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default ProgrammingDS;
