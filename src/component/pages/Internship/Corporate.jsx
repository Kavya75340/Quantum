import { useState } from "react";
import { motion } from "framer-motion";
import {
    Building2,
    Users,
    TrendingUp,
    Award,
    Shield,
    Brain,
    Cloud,
    Code2,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Zap,
    Target,
    Globe,
    Briefcase,
    GraduationCap,
    Star,
    Play,
    HeadphonesIcon,
    Layers,
    Rocket,
    ChevronRight,
} from "lucide-react";
import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";
import { Input } from "@/component/ui/input";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
};

const trainingPrograms = [
    {
        icon: Shield,
        title: "Cybersecurity Enablement",
        description:
            "Strengthen your enterprise with structured security awareness and advanced cyber defense initiatives.",
        courses: "45+ Programs",
        learners: "12K+ Enabled",
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description:
            "Build expertise across AWS, Azure, and GCP through practical labs and real-world architecture use cases.",
        courses: "60+ Programs",
        learners: "18K+ Enabled",
    },
    {
        icon: Brain,
        title: "AI & Machine Intelligence",
        description:
            "Empower teams with next-generation AI capabilities, from core concepts to advanced deep learning systems.",
        courses: "35+ Programs",
        learners: "10K+ Enabled",
    },
    {
        icon: Code2,
        title: "Software Development",
        description:
            "Modern full-stack engineering, DevOps pipelines, and scalable development practices for elite teams.",
        courses: "80+ Programs",
        learners: "25K+ Enabled",
    },
    {
        icon: BarChart3,
        title: "Data Science & Insights",
        description:
            "Drive smarter decisions using analytics, visualization frameworks, and applied statistical modeling.",
        courses: "50+ Programs",
        learners: "15K+ Enabled",
    },
    {
        icon: Layers,
        title: "Digital Modernization",
        description:
            "Comprehensive digital roadmaps, agile execution models, and enterprise change enablement strategies.",
        courses: "30+ Programs",
        learners: "8K+ Enabled",
    },
];

const industries = [
    {
        icon: Building2,
        name: "Banking & Financial Services",
        companies: "200+",
    },
    { icon: HeadphonesIcon, name: "Technology Services", companies: "350+" },
    { icon: Globe, name: "Healthcare & Life Sciences", companies: "120+" },
    { icon: Briefcase, name: "Industrial Manufacturing", companies: "180+" },
    { icon: Shield, name: "Public Sector", companies: "90+" },
    { icon: Rocket, name: "Startup Ecosystem", companies: "500+" },
];

const stats = [
    { value: "2,500+", label: "Corporate Clients" },
    { value: "100k+", label: "Professionals Upskilled" },
    { value: "50+", label: "Learning Tracks" },
    { value: "98%", label: "Client Retention Rate" },
];

const benefits = [
    {
        icon: Target,
        title: "Personalized Learning Journeys",
        description:
            "Role-based curricula mapped to organizational objectives, capability gaps, and industry benchmarks.",
    },
    {
        icon: BarChart3,
        title: "Actionable Insights",
        description:
            "Monitor performance, evaluate ROI, and uncover skill gaps using real-time analytics and reporting.",
    },
    {
        icon: Users,
        title: "Dedicated Program Advisor",
        description:
            "A single point of contact ensuring smooth onboarding, engagement, and continuous improvement.",
    },
    {
        icon: GraduationCap,
        title: "Certification Readiness",
        description:
            "Structured preparation for globally recognized credentials from AWS, Google, Microsoft, and others.",
    },
    {
        icon: Zap,
        title: "Immersive Hands-On Labs",
        description:
            "Real cloud environments with 1,000+ guided labs, simulations, and sandbox-based projects.",
    },
    {
        icon: Globe,
        title: "Worldwide Delivery Model",
        description:
            "Flexible scheduling, multilingual support, and learning delivery across 150+ global locations.",
    },
];

const testimonials = [
    {
        quote: "Quantum Training elevated our engineering organization. Measurable ROI appeared within 90 days, and our cloud transformation accelerated significantly.",
        name: "Sarah Chen",
        role: "Chief Technology Officer",
        company: "TechVantage Inc.",
        rating: 5,
    },
    {
        quote: "The tailored cybersecurity engagement lowered incident rates by over 70%. Their practical approach delivered immediate impact.",
        name: "Michael Roberts",
        role: "Chief Information Security Officer",
        company: "SecureBank Group",
        rating: 5,
    },
    {
        quote: "We successfully upskilled 5,000 professionals in AI and ML within six months. The insights dashboard and success leadership were standout differentiators.",
        name: "Priya Sharma",
        role: "VP – Learning & Development",
        company: "InnovateCorp",
        rating: 5,
    },
];

const processSteps = [
    {
        step: "01",
        title: "Capability Assessment",
        description:
            "We evaluate existing skill levels and pinpoint priority gaps aligned with strategic business outcomes.",
    },
    {
        step: "02",
        title: "Program Architecture",
        description:
            "Our experts design customized learning paths incorporating labs, projects, and certification journeys.",
    },
    {
        step: "03",
        title: "Guided Execution",
        description:
            "Experienced practitioners deliver training through live sessions, self-paced modules, and blended formats.",
    },
    {
        step: "04",
        title: "Performance Optimization",
        description:
            "Continuously track progress, measure impact, and refine programs using data-driven insights.",
    },
];

const Corporate = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        employees: "",
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(0,84%,50%,0.08)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(0,84%,50%,0.05)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                                 linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                {/* Floating elements */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-30 right-[10%] w-16 h-16 glass-card flex items-center justify-center"
                >
                    <Building2 className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/3 right-[50%] w-14 h-14 glass-card flex items-center justify-center"
                >
                    <TrendingUp className="w-7 h-7 text-primary" />
                </motion.div>
                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/3 left-[40%] w-12 h-12 glass-card flex items-center justify-center"
                >
                    <Award className="w-6 h-6 text-primary" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <motion.div
                                {...fadeInUp}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                            >
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-sm font-medium text-muted-foreground">
                                    Trusted by 2,500+ Global Enterprises
                                </span>
                            </motion.div>

                            <motion.h1
                                {...fadeInUp}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                            >
                                Empower Your
                                <br />
                                <span className="gradient-text">Workforce</span>
                                <br />
                                With Elite Training
                            </motion.h1>

                            <motion.p
                                {...fadeInUp}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-xl text-muted-foreground max-w-xl mb-8"
                            >
                                Quantum Training delivers enterprise-ready
                                upskilling solutions across Cybersecurity, AI,
                                Cloud, and Data Science — aligned with business
                                priorities and proven performance outcomes.
                            </motion.p>

                            <motion.div
                                {...fadeInUp}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                                >
                                    Schedule a Demo
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-border hover:bg-secondary/50 px-8 py-6 text-lg group"
                                >
                                    <Play className="mr-2 w-5 h-5" />
                                    View Platform Overview
                                </Button>
                            </motion.div>

                            {/* Trust Logos */}
                            <motion.div
                                {...fadeInUp}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-12"
                            >
                                <p className="text-sm text-muted-foreground mb-4">
                                    Chosen by leading global enterprises
                                </p>
                                <div className="flex flex-wrap gap-6 items-center">
                                    {[
                                        "Google",
                                        "Microsoft",
                                        "Amazon",
                                        "IBM",
                                        "Deloitte",
                                    ].map((brand) => (
                                        <div
                                            key={brand}
                                            className="px-4 py-2 glass-card text-sm font-semibold text-muted-foreground"
                                        >
                                            {brand}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - Lead Form */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="glass-card p-8 glow-effect">
                                <div className="text-center mb-6">
                                    <h3 className="font-display text-2xl font-bold mb-2">
                                        Build Your Custom Training Roadmap
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Share your details and our specialists
                                        will connect with you within 24 hours
                                    </p>
                                </div>
                                <form
                                    className="space-y-4"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <Input
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="bg-background/50 border-border"
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Business Email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="bg-background/50 border-border"
                                    />
                                    <Input
                                        placeholder="Organization Name"
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                company: e.target.value,
                                            })
                                        }
                                        className="bg-background/50 border-border"
                                    />
                                    <Input
                                        placeholder="Contact Number"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        className="bg-background/50 border-border"
                                    />
                                    <select
                                        value={formData.employees}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                employees: e.target.value,
                                            })
                                        }
                                        className="w-full h-10 px-3 rounded-md border border-border bg-background/50 text-sm text-foreground"
                                    >
                                        <option value="">
                                            Organization Size
                                        </option>
                                        <option value="50-200">50 – 200</option>
                                        <option value="200-500">
                                            200 – 500
                                        </option>
                                        <option value="500-1000">
                                            500 – 1,000
                                        </option>
                                        <option value="1000-5000">
                                            1,000 – 5,000
                                        </option>
                                        <option value="5000+">5,000+</option>
                                    </select>
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                                        Start the Conversation
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground text-center mt-4">
                                    🔒 Your details remain confidential and
                                    fully protected
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-border bg-card/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Training Programs */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Training Programs
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            World-Class{" "}
                            <span className="gradient-text">
                                Corporate Training
                            </span>{" "}
                            Programs
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Comprehensive upskilling solutions designed for
                            enterprise teams across every technology domain.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trainingPrograms.map((program, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card className="glass-card hover-lift h-full group cursor-pointer overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                            <program.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold mb-3">
                                            {program.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            {program.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm">
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                {program.courses}
                                            </span>
                                            <span className="text-muted-foreground">
                                                {program.learners}
                                            </span>
                                        </div>
                                        <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                            Explore Program{" "}
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works / Process */}
            <section className="py-24 bg-card/30 border-y border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Rocket className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Our Process
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            How{" "}
                            <span className="gradient-text">
                                Quantum Training
                            </span>{" "}
                            Works
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            A proven 4-step methodology that delivers measurable
                            results for your organization.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                            >
                                <Card className="glass-card hover-lift h-full relative overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="font-display text-xl font-bold mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {step.description}
                                        </p>
                                    </CardContent>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                                            <ChevronRight className="w-8 h-8 text-primary/30" />
                                        </div>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Benefits */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Why Choose Us
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            The Quantum Training{" "}
                            <span className="gradient-text">Advantage</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Enterprise features that set us apart from
                            traditional training providers.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card className="glass-card hover-lift h-full">
                                    <CardContent className="p-8">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                                            <benefit.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-display text-lg font-bold mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 bg-card/30 border-y border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Globe className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Industries We Support
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Powering Workforce Excellence{" "}
                            <span className="gradient-text">
                                Across Sectors
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card className="glass-card hover-lift text-center py-8 px-4 cursor-pointer group">
                                    <CardContent className="p-0">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                            <industry.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h4 className="font-semibold text-sm mb-1">
                                            {industry.name}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            {industry.companies} Organizations
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Star className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Customer Success Highlights
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Hear From{" "}
                            <span className="gradient-text">Our Partners</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                            >
                                <Card className="glass-card hover-lift h-full">
                                    <CardContent className="p-8">
                                        <div className="flex gap-1 mb-4">
                                            {Array.from({
                                                length: testimonial.rating,
                                            }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-primary text-primary"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-foreground mb-6 italic leading-relaxed">
                                            “{testimonial.quote}”
                                        </p>
                                        <div className="border-t border-border pt-4">
                                            <div className="font-semibold">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </div>
                                            <div className="text-sm text-primary font-medium">
                                                {testimonial.company}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,84%,50%,0.08)_0%,_transparent_60%)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            Ready to{" "}
                            <span className="gradient-text">Elevate</span> Your
                            Workforce?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Partner with 2,500+ organizations that rely on
                            Quantum Training to future-proof their teams.
                            Receive a tailored training plan within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg group"
                            >
                                Book a Strategy Call
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-border hover:bg-secondary/50 px-10 py-6 text-lg"
                            >
                                Get Company Deck
                            </Button>
                        </div>
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Zero-Cost Consultation
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Personalized Skill Roadmaps
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Measurable ROI
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Corporate;
