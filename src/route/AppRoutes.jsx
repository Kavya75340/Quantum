import React from "react";
import { Routes, Route } from "react-router-dom";

// Home
import Home from "@/component/pages/Home/Home";

// Roadmaps
import DefSpaceITInfra from "@/component/pages/Roadmaps/DefSpaceITInfra";
import CloudDevOps from "@/component/pages/Roadmaps/CloudDevOps";
import CyberSecurityDevSecOps from "@/component/pages/Roadmaps/CyberSecurityDevSecOps";
import BusinessAIAnalytics from "@/component/pages/Roadmaps/BusinessAIAnalytics";
import LeadershipProjectManagement from "@/component/pages/Roadmaps/LeadershipProjectManagement";
import EmbeddedIoT from "@/component/pages/Roadmaps/EmbeddedIoT";
import ProgrammingDSEssentials from "@/component/pages/Roadmaps/ProgrammingDSEssentials";

// Internship
// import CorporateInternship from "@/component/pages/Internship/CorporateInternship/CorporateInternship";
// import CollegeUniversityInternship from "@/component/pages/Internship/CollegeUniversity/CollegeUniversityInternship";

// // More
// import Blog from "@/component/pages/Blog/Blog";
// import Resources from "@/component/pages/Resources/Resources";
// import About from "@/component/pages/About/About";
// import Contact from "@/component/pages/Contact/Contact";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* ROADMAPS */}
            <Route
                path="/roadmaps/defspace-it-infra"
                element={<DefSpaceITInfra />}
            />
            <Route path="/roadmaps/cloud-devops" element={<CloudDevOps />} />
            <Route
                path="/roadmaps/cybersecurity-devsecops"
                element={<CyberSecurityDevSecOps />}
            />
            <Route
                path="/roadmaps/business-ai-analytics"
                element={<BusinessAIAnalytics />}
            />
            <Route
                path="/roadmaps/leadership-project-management"
                element={<LeadershipProjectManagement />}
            />
            <Route path="/roadmaps/embedded-iot" element={<EmbeddedIoT />} />
            <Route
                path="/roadmaps/programming-ds-essentials"
                element={<ProgrammingDSEssentials />}
            />

            {/* INTERNSHIP */}
            {/* <Route path="/internship/corporate" element={<CorporateInternship />} />
            <Route
                path="/internship/college-university"
                element={<CollegeUniversityInternship />}
            /> */}

            {/* MORE */}
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    );
};

export default AppRoutes;
