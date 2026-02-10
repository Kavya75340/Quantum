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
        title: "Cybersecurity Training",
        description:
            "Protect your organization with comprehensive security awareness and advanced threat defense programs.",
        courses: "45+ Courses",
        learners: "12K+ Trained",
    },
    {
        icon: Cloud,
        title: "Cloud Computing",
        description:
            "Master AWS, Azure, and GCP with hands-on labs and real-world architecture projects.",
        courses: "60+ Courses",
        learners: "18K+ Trained",
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description:
            "Transform your workforce with cutting-edge AI skills, from fundamentals to advanced deep learning.",
        courses: "35+ Courses",
        learners: "10K+ Trained",
    },
    {
        icon: Code2,
        title: "Software Engineering",
        description:
            "Full-stack development, DevOps, and modern engineering practices for high-performing teams.",
        courses: "80+ Courses",
        learners: "25K+ Trained",
    },
    {
        icon: BarChart3,
        title: "Data Science & Analytics",
        description:
            "Unlock data-driven decision making with analytics, visualization, and statistical modeling.",
        courses: "50+ Courses",
        learners: "15K+ Trained",
    },
    {
        icon: Layers,
        title: "Digital Transformation",
        description:
            "End-to-end digital strategy, agile methodologies, and change management for enterprises.",
        courses: "30+ Courses",
        learners: "8K+ Trained",
    },
];

const industries = [
    { icon: Building2, name: "Banking & Finance", companies: "200+" },
    { icon: HeadphonesIcon, name: "Technology", companies: "350+" },
    { icon: Globe, name: "Healthcare", companies: "120+" },
    { icon: Briefcase, name: "Manufacturing", companies: "180+" },
    { icon: Shield, name: "Government", companies: "90+" },
    { icon: Rocket, name: "Startups", companies: "500+" },
];

const stats = [
    { value: "2,500+", label: "Enterprise Clients" },
    { value: "1M+", label: "Professionals Trained" },
    { value: "500+", label: "Training Programs" },
    { value: "98%", label: "Client Retention" },
];

const benefits = [
    {
        icon: Target,
        title: "Custom Learning Paths",
        description:
            "Tailored curricula aligned to your business goals, skill gaps, and industry requirements.",
    },
    {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description:
            "Track progress, measure ROI, and identify skill gaps with our advanced analytics dashboard.",
    },
    {
        icon: Users,
        title: "Dedicated Success Manager",
        description:
            "A personal account manager to ensure seamless onboarding and continuous program optimization.",
    },
    {
        icon: GraduationCap,
        title: "Industry Certifications",
        description:
            "Prepare your teams for globally recognized certifications from AWS, Google, Microsoft, and more.",
    },
    {
        icon: Zap,
        title: "Hands-On Labs",
        description:
            "Practice in real cloud environments with 1,000+ interactive labs and sandbox projects.",
    },
    {
        icon: Globe,
        title: "Global Delivery",
        description:
            "Multi-language support, flexible scheduling, and delivery across 150+ countries.",
    },
];

const testimonials = [
    {
        quote: "Quantum Training transformed our entire engineering division. The ROI was visible within 3 months — our cloud migration timeline was cut in half.",
        name: "Sarah Chen",
        role: "CTO, Fortune 500 Tech Company",
        company: "TechVantage Inc.",
        rating: 5,
    },
    {
        quote: "The customized cybersecurity program reduced our security incidents by 73%. Their hands-on approach made all the difference.",
        name: "Michael Roberts",
        role: "CISO, Global Financial Services",
        company: "SecureBank Group",
        rating: 5,
    },
    {
        quote: "We upskilled 5,000 employees in AI/ML within 6 months. The dedicated success manager and analytics dashboard were game changers.",
        name: "Priya Sharma",
        role: "VP of Learning & Development",
        company: "InnovateCorp",
        rating: 5,
    },
];

const processSteps = [
    {
        step: "01",
        title: "Skill Gap Analysis",
        description:
            "We assess your team's current capabilities and identify critical skill gaps aligned with your business objectives.",
    },
    {
        step: "02",
        title: "Custom Program Design",
        description:
            "Our learning architects build tailored curricula with hands-on labs, real-world projects, and certification paths.",
    },
    {
        step: "03",
        title: "Expert-Led Delivery",
        description:
            "Industry practitioners deliver training through live sessions, self-paced modules, and blended learning formats.",
    },
    {
        step: "04",
        title: "Measure & Optimize",
        description:
            "Track learner progress, measure business impact, and continuously refine programs based on analytics.",
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
                                Quantum Training delivers enterprise-grade
                                upskilling programs in Cybersecurity, AI, Cloud,
                                and Data Science — tailored to your business
                                goals with measurable ROI.
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
                                    Request a Demo
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-border hover:bg-secondary/50 px-8 py-6 text-lg group"
                                >
                                    <Play className="mr-2 w-5 h-5" />
                                    Watch Overview
                                </Button>
                            </motion.div>

                            {/* Trust Logos */}
                            <motion.div
                                {...fadeInUp}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-12"
                            >
                                <p className="text-sm text-muted-foreground mb-4">
                                    Trusted by industry leaders
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
                                        Get a Custom Training Plan
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Fill out the form and our team will
                                        reach out within 24 hours
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
                                        placeholder="Work Email"
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
                                        placeholder="Company Name"
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
                                        placeholder="Phone Number"
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
                                            Number of Employees
                                        </option>
                                        <option value="50-200">50 - 200</option>
                                        <option value="200-500">
                                            200 - 500
                                        </option>
                                        <option value="500-1000">
                                            500 - 1,000
                                        </option>
                                        <option value="1000-5000">
                                            1,000 - 5,000
                                        </option>
                                        <option value="5000+">5,000+</option>
                                    </select>
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                                        Get Started{" "}
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground text-center mt-4">
                                    🔒 Your information is secure and will never
                                    be shared
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
                                Industries We Serve
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Transforming Teams{" "}
                            <span className="gradient-text">
                                Across Industries
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
                                            {industry.companies} Companies
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
                                Client Success Stories
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            What Our{" "}
                            <span className="gradient-text">Clients Say</span>
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
                                            "{testimonial.quote}"
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
                            <span className="gradient-text">Transform</span>{" "}
                            Your Workforce?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Join 2,500+ enterprises that trust Quantum Training
                            to upskill their teams. Get a customized training
                            proposal in 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg group"
                            >
                                Schedule a Consultation
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-border hover:bg-secondary/50 px-10 py-6 text-lg"
                            >
                                Download Brochure
                            </Button>
                        </div>
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Free Consultation
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Custom Learning Paths
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                ROI Guarantee
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Corporate;
