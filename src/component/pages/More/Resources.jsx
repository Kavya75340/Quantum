import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";

import {
    Search,
    Download,
    FileText,
    Video,
    BookOpen,
    Code,
    Shield,
    Cloud,
    Brain,
    Database,
    Lock,
    Star,
    Users,
    ArrowRight,
    Filter,
    Zap,
    Award,
    TrendingUp,
} from "lucide-react";

const resourceCategories = [
    { id: "all", label: "Full Asset Vault", icon: Filter },
    { id: "ebooks", label: "Digital Playbooks", icon: BookOpen },
    { id: "videos", label: "Pro Video Sessions", icon: Video },
    { id: "cheatsheets", label: "Instant Reference Sheets", icon: FileText },
    { id: "tools", label: "Systems & Frameworks", icon: Code },
];

const featuredResources = [
    {
        title: "Corporate Cybersecurity Playbook 2026",
        description:
            "400+ pages detailing network protection, risk control, and ethical penetration practices aligned with global standards.",
        type: "E-Book",
        icon: Shield,
        downloads: "25K+",
        rating: 4.9,
        premium: false,
        image: "📚",
    },
    {
        title: "AWS Solutions Architect Pro Track",
        description:
            "50+ hours of guided video instruction with practical labs built for AWS certification success.",
        type: "Video Course",
        icon: Cloud,
        downloads: "18K+",
        rating: 4.8,
        premium: true,
        image: "🎬",
    },
    {
        title: "Machine Learning Knowledge Toolkit",
        description:
            "Focused reference material covering TensorFlow, PyTorch, scikit-learn, and essential ML pipelines.",
        type: "Cheat Sheet",
        icon: Brain,
        downloads: "32K+",
        rating: 4.9,
        premium: false,
        image: "📋",
    },
];

const allResources = [
    {
        title: "Linux Command Line Proficiency",
        type: "E-Book",
        category: "ebooks",
        icon: Code,
        downloads: "15K+",
        premium: false,
    },
    {
        title: "Docker & Kubernetes Deployment Guide",
        type: "Video",
        category: "videos",
        icon: Cloud,
        downloads: "12K+",
        premium: true,
    },
    {
        title: "Python Security Automation Scripts",
        type: "Template",
        category: "tools",
        icon: Shield,
        downloads: "8K+",
        premium: false,
    },
    {
        title: "SQL Injection Defense Techniques",
        type: "Cheat Sheet",
        category: "cheatsheets",
        icon: Database,
        downloads: "20K+",
        premium: false,
    },
    {
        title: "Advanced Penetration Testing Toolkit",
        type: "Tools",
        category: "tools",
        icon: Shield,
        downloads: "10K+",
        premium: true,
    },
    {
        title: "High-Scale Cloud Architecture Models",
        type: "E-Book",
        category: "ebooks",
        icon: Cloud,
        downloads: "14K+",
        premium: false,
    },
    {
        title: "AI & ML Interview Accelerator",
        type: "Video",
        category: "videos",
        icon: Brain,
        downloads: "9K+",
        premium: true,
    },
    {
        title: "Core Network Security Concepts",
        type: "E-Book",
        category: "ebooks",
        icon: Shield,
        downloads: "22K+",
        premium: false,
    },
    {
        title: "Terraform Infrastructure Blueprints",
        type: "Template",
        category: "tools",
        icon: Code,
        downloads: "7K+",
        premium: false,
    },
    {
        title: "Enterprise DevOps Pipeline Systems",
        type: "Tools",
        category: "tools",
        icon: Zap,
        downloads: "11K+",
        premium: true,
    },
    {
        title: "API Security Implementation Guide",
        type: "Cheat Sheet",
        category: "cheatsheets",
        icon: Code,
        downloads: "16K+",
        premium: false,
    },
    {
        title: "Practical Data Science Using Python",
        type: "Video",
        category: "videos",
        icon: Database,
        downloads: "13K+",
        premium: false,
    },
];

const stats = [
    { value: "200+", label: "Curated Assets", icon: BookOpen },
    { value: "100K+", label: "Total Downloads", icon: Download },
    { value: "20K+", label: "Skilled Learners", icon: Users },
    { value: "4.9", label: "Community Rating", icon: Star },
];

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredResources = allResources.filter((resource) => {
        const matchesCategory =
            activeCategory === "all" || resource.category === activeCategory;
        const matchesSearch = resource.title
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(0,84%,50%,0.08)_0%,_transparent_50%)]" />

                {/* FLOATING ICONS */}
                <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-40 left-[10%] w-16 h-16 glass-card flex items-center justify-center"
                >
                    <BookOpen className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute top-60 right-[15%] w-14 h-14 glass-card flex items-center justify-center"
                >
                    <Video className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-40 left-[20%] w-12 h-12 glass-card flex items-center justify-center"
                >
                    <Code className="w-6 h-6 text-primary" />
                </motion.div>

                {/* HERO CONTENT */}
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-6"
                        >
                            <Download className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                                Free & Premium Resources
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-5xl md:text-7xl font-bold mb-6"
                        >
                            Your Learning <br />
                            <span className="gradient-text">
                                Resource Library
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                        >
                            Access hundreds of free e-books, cheat sheets,
                            videos and tools.
                        </motion.p>

                        {/* SEARCH */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-xl mx-auto"
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    placeholder="Search resources..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="pl-12 pr-4 py-6 text-lg glass-card border-border/50"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-12 border-y border-border/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-3xl font-bold gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FEATURED RESOURCES */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-primary text-sm uppercase">
                            Top Picks
                        </span>
                        <h2 className="font-display text-4xl font-bold mt-2">
                            Featured{" "}
                            <span className="gradient-text">Resources</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredResources.map((resource, i) => {
                            const Icon = resource.icon;
                            return (
                                <div
                                    key={i}
                                    className="glass-card p-6 relative"
                                >
                                    {resource.premium && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs rounded-full flex items-center gap-1">
                                            <Lock className="w-3 h-3" /> Premium
                                        </div>
                                    )}

                                    <div className="text-6xl mb-4">
                                        {resource.image}
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                                            {resource.type}
                                        </span>
                                        <div className="flex items-center gap-1 text-sm">
                                            <Star className="w-4 h-4 text-primary fill-primary" />
                                            {resource.rating}
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-lg mb-2">
                                        {resource.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {resource.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-1 text-muted-foreground">
                                            <Download className="w-4 h-4" />
                                            {resource.downloads}
                                        </span>

                                        <Button
                                            size="sm"
                                            className="bg-primary text-white"
                                        >
                                            {resource.premium
                                                ? "Unlock"
                                                : "Download"}
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CATEGORY FILTER */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-primary text-sm uppercase">
                            Browse All
                        </span>
                        <h2 className="font-display text-4xl font-bold">
                            Resource{" "}
                            <span className="gradient-text">Library</span>
                        </h2>
                    </div>

                    {/* CATEGORY TABS */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {resourceCategories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-full ${
                                        activeCategory === cat.id
                                            ? "bg-primary text-white"
                                            : "glass-card"
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* ALL RESOURCES GRID */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredResources.map((resource, index) => {
                            const Icon = resource.icon;
                            return (
                                <div
                                    key={index}
                                    className="group glass-card p-5 relative"
                                >
                                    {resource.premium && (
                                        <Lock className="absolute top-3 right-3 w-4 h-4 text-primary" />
                                    )}

                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <span className="text-xs text-primary">
                                        {resource.type}
                                    </span>
                                    <h3 className="font-semibold mt-1 mb-2">
                                        {resource.title}
                                    </h3>

                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Download className="w-3 h-3" />
                                            {resource.downloads}
                                        </span>

                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PREMIUM CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="glass-card p-12 text-center relative">
                        <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center">
                            <Award className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="font-display text-4xl font-bold mb-4">
                            Unlock{" "}
                            <span className="gradient-text">
                                Premium Access
                            </span>
                        </h2>

                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Get unlimited access to all premium resources and
                            exclusive content.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Button className="bg-primary text-white px-8">
                                Go Premium{" "}
                                <TrendingUp className="ml-2 w-5 h-5" />
                            </Button>

                            <Button variant="outline">View Plans</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
