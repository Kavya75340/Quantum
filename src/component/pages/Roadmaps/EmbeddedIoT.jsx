import HeroSection from "./common/HeroSection";
import FeaturesSection from "./common/FeaturesSection";
import RoadmapSection from "./common/RoadmapSection";
import CTASection from "./common/CTASection";
import { embedded, embeddedIoTRoadmap } from "./data/embedded";

const Embedded = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={embedded} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection data={embeddedIoTRoadmap} />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default Embedded;
