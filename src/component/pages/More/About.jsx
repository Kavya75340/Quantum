import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import {
    Linkedin,
    Twitter,
    Heart,
    Globe,
    Award,
    Users,
    Rocket,
    Lightbulb,
    Star,
    ArrowRight,
    Play,
    Target,
    Shield,
    TrendingUp,
    MapPin,
    Mail,
    Zap,
} from "lucide-react";

const stats = [
    { value: "2019", label: "Founded" },
    { value: "50K+", label: "Students Trained" },
    { value: "120+", label: "Countries Reached" },
    { value: "500+", label: "Courses Created" },
];

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description:
            "We're on a mission to democratize tech education and make cybersecurity skills accessible to everyone.",
    },
    {
        icon: Heart,
        title: "Student-First",
        description:
            "Every decision we make starts with one question: How does this help our students succeed?",
    },
    {
        icon: Zap,
        title: "Innovation",
        description:
            "We constantly push boundaries to deliver cutting-edge curriculum that reflects real-world demands.",
    },
    {
        icon: Shield,
        title: "Integrity",
        description:
            "We believe in transparent, honest education. No shortcuts, no fluff—just real skills.",
    },
];

const milestones = [
    {
        year: "2019",
        title: "Quantum Training Founded",
        description: "Started with a vision to transform tech education.",
    },
    {
        year: "2020",
        title: "First 10,000 Students",
        description: "Rapid growth during global shift to remote learning.",
    },
    {
        year: "2021",
        title: "Enterprise Launch",
        description: "Launched B2B platform for corporate training.",
    },
    {
        year: "2022",
        title: "AI Curriculum Added",
        description: "Expanded into AI/ML and data science tracks.",
    },
    {
        year: "2023",
        title: "50,000 Students Milestone",
        description: "Celebrating our growing global community.",
    },
    {
        year: "2024",
        title: "Global Certification Partner",
        description: "Official partner for major industry certifications.",
    },
];

const team = [
    {
        name: "Dr. Sarah Chen",
        role: "Founder & CEO",
        bio: "Former CISO at Fortune 500. 15+ years in cybersecurity.",
        image: "👩‍💼",
    },
    {
        name: "Marcus Johnson",
        role: "Chief Learning Officer",
        bio: "EdTech pioneer. Built learning platforms for 1M+ users.",
        image: "👨‍💻",
    },
    {
        name: "Priya Patel",
        role: "VP of Engineering",
        bio: "Ex-Google. Cloud architecture expert and AWS Hero.",
        image: "👩‍🔬",
    },
    {
        name: "David Kim",
        role: "Head of Content",
        bio: "Authored 5 bestselling cybersecurity textbooks.",
        image: "👨‍🏫",
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Partnerships",
        bio: "Built enterprise training programs for 100+ companies.",
        image: "👩‍💼",
    },
    {
        name: "James Wright",
        role: "Lead Instructor",
        bio: "Ethical hacker with 10+ certifications. Bug bounty hunter.",
        image: "🧑‍💻",
    },
];

const About = () => {
    return (
        //
        <div className="min-h-screen bg-background">
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(0,84%,50%,0.08)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(0,84%,60%,0.05)_0%,_transparent_50%)]" />

                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-40 left-[10%] w-16 h-16 glass-card flex items-center justify-center"
                >
                    <Rocket className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute top-60 right-[15%] w-14 h-14 glass-card flex items-center justify-center"
                >
                    <Lightbulb className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-40 right-[20%] w-12 h-12 glass-card flex items-center justify-center"
                >
                    <Star className="w-6 h-6 text-primary" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                        <Heart className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Our Story
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                        Building the Future of <br />
                        <span className="gradient-text">Tech Education</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-10">
                        Quantum Training was founded with a simple belief:
                        everyone deserves access to world-class cybersecurity
                        and tech education.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <Button size="lg" className="px-8">
                            Join Our Mission{" "}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline">
                            <Play className="mr-2 w-5 h-5" />
                            Watch Our Story
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-12 border-y border-border/50 bg-secondary/30">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold gradient-text">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* THirdd */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Our Mission
                            </span>

                            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Empowering the Next Generation of
                                <span className="gradient-text">
                                    {" "}
                                    Tech Leaders
                                </span>
                            </h2>

                            <p className="text-muted-foreground text-lg mb-6">
                                We believe that cybersecurity isn't just for
                                experts—it's for everyone. In a world where
                                digital threats evolve daily, we're committed to
                                arming individuals and organizations with the
                                skills they need to protect what matters.
                            </p>

                            <p className="text-muted-foreground text-lg mb-8">
                                From complete beginners to seasoned
                                professionals, our courses are designed to meet
                                learners where they are and take them where they
                                need to go.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                                    <Globe className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">
                                        120+ Countries
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">
                                        Industry Certified
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                                    <Users className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">
                                        Expert Instructors
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card p-8 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,84%,50%,0.1)_0%,_transparent_70%)]" />
                                <div className="relative z-10">
                                    <div className="text-8xl mb-6">🎯</div>
                                    <h3 className="font-display text-2xl font-bold mb-4">
                                        Our Vision
                                    </h3>
                                    <p className="text-muted-foreground">
                                        A world where everyone has the skills to
                                        navigate and protect the digital
                                        landscape.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            What Drives Us
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                            Our{" "}
                            <span className="gradient-text">Core Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="border-1 border-gray-400/20 rounded-lg bg-gray-300/20 p-6 text-center hover-lift"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Our Journey
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                            Key{" "}
                            <span className="gradient-text">Milestones</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    x: i % 2 === 0 ? -20 : 20,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8 pb-12 last:pb-0"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-500/20" />
                                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-primary rounded-full" />

                                <div className="border-1 border-gray-400/20 rounded-lg bg-gray-300/20 p-6 hover-lift">
                                    <span className="text-primary font-bold text-lg">
                                        {item.year}
                                    </span>
                                    <h3 className="font-display text-xl font-bold mt-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            The People Behind
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                            Meet Our <span className="gradient-text">Team</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="border-1 border-gray-400/20 rounded-lg bg-gray-200/20 p-6 text-center hover-lift group"
                            >
                                <div className="text-6xl mb-4">
                                    {member.image}
                                </div>

                                <h3 className="font-display text-xl font-bold group-hover:text-primary">
                                    {member.name}
                                </h3>

                                <p className="text-primary text-sm font-medium mt-1">
                                    {member.role}
                                </p>

                                <p className="text-muted-foreground text-sm mt-3">
                                    {member.bio}
                                </p>

                                <div className="flex justify-center gap-3 mt-4">
                                    <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                        <Linkedin className="w-4 h-4" />
                                    </span>
                                    <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                        <Twitter className="w-4 h-4" />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,84%,50%,0.1)_0%,_transparent_70%)]" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-4">
                                    Let's{" "}
                                    <span className="gradient-text">
                                        Connect
                                    </span>
                                </h2>

                                <p className="text-muted-foreground text-lg mb-6">
                                    Have questions about our courses or
                                    partnerships? We'd love to hear from you.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="text-primary" />
                                        <span className="text-muted-foreground">
                                            San Francisco, CA
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="text-primary" />
                                        <span className="text-muted-foreground">
                                            hello@quantumtraining.com
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1">
                                    Contact Us{" "}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="flex-1"
                                >
                                    View Careers{" "}
                                    <TrendingUp className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default About;
