import { useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    TrendingUp,
    MapPin,
    Star,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    Globe,
    Zap,
    Target,
    Building2,
    Laptop,
    ChevronRight,
    Clock,
    FileText,
    Lightbulb,
    Trophy,
    Rocket,
    Search,
} from "lucide-react";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Card, CardContent } from "@/component/ui/card";
import { Badge } from "@/component/ui/badge";

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

const programs = [
    {
        icon: Laptop,
        title: "Campus Ambassador Program",
        duration: "3 Months",
        stipend: "Performance Based",
        description:
            "Represent Quantum Training at your campus, organize workshops, and build leadership skills while earning rewards.",
        skills: ["Leadership", "Marketing", "Event Management"],
        applicants: "5K+",
        tag: "Popular",
    },
    {
        icon: BookOpen,
        title: "Industry-Ready Internship",
        duration: "6 Months",
        stipend: "₹15,000/month",
        description:
            "Work on live projects with industry mentors in AI, Cloud, Cybersecurity, and Data Science domains.",
        skills: ["Technical Skills", "Problem Solving", "Teamwork"],
        applicants: "12K+",
        tag: "Featured",
    },
    {
        icon: Award,
        title: "Research Fellowship",
        duration: "12 Months",
        stipend: "₹25,000/month",
        description:
            "Collaborate with PhD researchers on cutting-edge publications in AI, quantum computing, and cybersecurity.",
        skills: ["Research", "Academic Writing", "Innovation"],
        applicants: "2K+",
        tag: "Elite",
    },
    {
        icon: Briefcase,
        title: "Pre-Placement Training",
        duration: "4 Months",
        stipend: "Placement Guarantee",
        description:
            "Intensive bootcamp covering aptitude, coding, system design, and mock interviews with top recruiters.",
        skills: ["DSA", "System Design", "Communication"],
        applicants: "8K+",
        tag: "Guaranteed",
    },
    {
        icon: Globe,
        title: "Global Immersion Program",
        duration: "2 Months",
        stipend: "Fully Sponsored",
        description:
            "Study abroad experience with partner universities in USA, UK, and Singapore with project collaboration.",
        skills: ["Cross-Cultural", "Networking", "Global Exposure"],
        applicants: "1K+",
        tag: "Premium",
    },
    {
        icon: Lightbulb,
        title: "Startup Incubation Track",
        duration: "6 Months",
        stipend: "Seed Funding",
        description:
            "Turn your ideas into startups with mentorship, funding support, and access to Quantum's innovation lab.",
        skills: ["Entrepreneurship", "Pitching", "Product Dev"],
        applicants: "3K+",
        tag: "New",
    },
];

const partnerColleges = [
    { name: "IIT Delhi", location: "New Delhi", students: "2,500+" },
    { name: "IIT Bombay", location: "Mumbai", students: "3,200+" },
    { name: "BITS Pilani", location: "Pilani", students: "1,800+" },
    { name: "NIT Trichy", location: "Trichy", students: "1,500+" },
    { name: "VIT Vellore", location: "Vellore", students: "4,000+" },
    { name: "IIIT Hyderabad", location: "Hyderabad", students: "1,200+" },
    { name: "DTU Delhi", location: "New Delhi", students: "2,000+" },
    { name: "SRM Chennai", location: "Chennai", students: "3,500+" },
];

const stats = [
    { value: "500+", label: "Partner Colleges" },
    { value: "50K+", label: "Students Trained" },
    { value: "92%", label: "Placement Rate" },
    { value: "200+", label: "Hiring Partners" },
];

const successStories = [
    {
        name: "Ananya Verma",
        college: "IIT Delhi",
        role: "SDE at Google",
        story: "The internship program gave me real-world exposure that no classroom could. I landed my dream job within 2 months of completing the program.",
        rating: 5,
        image: "AV",
    },
    {
        name: "Rahul Mehta",
        college: "BITS Pilani",
        role: "Data Scientist at Microsoft",
        story: "Quantum's industry mentorship bridged the gap between theory and practice. The hands-on projects were exactly what recruiters were looking for.",
        rating: 5,
        image: "RM",
    },
    {
        name: "Priya Singh",
        college: "NIT Trichy",
        role: "Cloud Engineer at AWS",
        story: "From campus ambassador to cloud engineer — Quantum Training transformed my career trajectory. The certifications gave me a massive edge.",
        rating: 5,
        image: "PS",
    },
];

const benefits = [
    {
        icon: Trophy,
        title: "Industry Certifications",
        description:
            "Earn globally recognized certifications from AWS, Google, Microsoft, and CompTIA at discounted rates.",
    },
    {
        icon: Users,
        title: "Mentorship Network",
        description:
            "1-on-1 mentoring from industry professionals at FAANG companies and top startups.",
    },
    {
        icon: Briefcase,
        title: "Placement Assistance",
        description:
            "Dedicated placement cell with 200+ hiring partners and guaranteed interview opportunities.",
    },
    {
        icon: Zap,
        title: "Hands-On Projects",
        description:
            "Work on 50+ real-world projects with actual datasets, cloud environments, and production tools.",
    },
    {
        icon: FileText,
        title: "Resume & Portfolio Building",
        description:
            "Professional resume reviews, GitHub portfolio setup, and LinkedIn optimization workshops.",
    },
    {
        icon: Target,
        title: "Hackathon Access",
        description:
            "Exclusive entry to national-level hackathons with prizes worth ₹50 Lakhs and direct hiring tracks.",
    },
];

const learningTracks = [
    {
        name: "Full Stack Development",
        courses: 24,
        duration: "6 months",
        demand: "Very High",
    },
    {
        name: "AI & Machine Learning",
        courses: 18,
        duration: "5 months",
        demand: "Extremely High",
    },
    {
        name: "Cybersecurity",
        courses: 15,
        duration: "4 months",
        demand: "High",
    },
    {
        name: "Cloud Computing (AWS/Azure)",
        courses: 20,
        duration: "5 months",
        demand: "Very High",
    },
    {
        name: "Data Science & Analytics",
        courses: 22,
        duration: "6 months",
        demand: "Extremely High",
    },
    { name: "DevOps & SRE", courses: 12, duration: "3 months", demand: "High" },
    {
        name: "Professional Communication",
        courses: 12,
        duration: "3 months",
        demand: "High",
    },
];

const College = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTrack, setActiveTrack] = useState(null);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(0,84%,50%,0.08)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(0,84%,50%,0.05)_0%,_transparent_50%)]" />
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
                    className="absolute top-1/4 left-[8%] w-16 h-16 glass-card flex items-center justify-center"
                >
                    <GraduationCap className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/3 right-[12%] w-14 h-14 glass-card flex items-center justify-center"
                >
                    <Rocket className="w-7 h-7 text-primary" />
                </motion.div>
                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/3 left-[15%] w-12 h-12 glass-card flex items-center justify-center"
                >
                    <Trophy className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                    animate={{ y: [8, -12, 8] }}
                    transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[25%] w-10 h-10 glass-card flex items-center justify-center"
                >
                    <BookOpen className="w-5 h-5 text-primary" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            {...fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-medium text-muted-foreground">
                                🎓 Partnered with 500+ Top Colleges Across India
                            </span>
                        </motion.div>

                        <motion.h1
                            {...fadeInUp}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                        >
                            Launch Your Career
                            <br />
                            <span className="gradient-text">From Campus</span>
                            <br />
                            To Corporate
                        </motion.h1>

                        <motion.p
                            {...fadeInUp}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                        >
                            Bridge the gap between academics and industry with
                            Quantum Training's college programs — internships,
                            certifications, mentorship, and guaranteed
                            placements.
                        </motion.p>

                        <motion.div
                            {...fadeInUp}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                            >
                                Apply Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-border hover:bg-secondary/50 px-8 py-6 text-lg"
                            >
                                <Building2 className="mr-2 w-5 h-5" />
                                Partner With Us
                            </Button>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-4 text-center"
                                >
                                    <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                College Programs
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Programs Designed for{" "}
                            <span className="gradient-text">
                                Future Leaders
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            From internships to research fellowships — find the
                            perfect program to kickstart your career.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card className="glass-card hover-lift h-full group cursor-pointer overflow-hidden relative">
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                            {program.tag}
                                        </Badge>
                                    </div>
                                    <CardContent className="p-8 pt-12">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                            <program.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold mb-2">
                                            {program.title}
                                        </h3>
                                        <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />{" "}
                                                {program.duration}
                                            </span>
                                            <span>•</span>
                                            <span>{program.stipend}</span>
                                        </div>
                                        <p className="text-muted-foreground mb-5">
                                            {program.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {program.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">
                                                {program.applicants} Applied
                                            </span>
                                            <span className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                                Apply Now{" "}
                                                <ChevronRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Tracks */}
            <section className="py-24 bg-card/30 border-y border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Learning Tracks
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Choose Your{" "}
                            <span className="gradient-text">Career Track</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Industry-aligned learning paths curated by hiring
                            managers from top tech companies.
                        </p>
                    </motion.div>

                    {/* Search */}
                    <motion.div
                        {...fadeInUp}
                        className="max-w-xl mx-auto mb-12"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                placeholder="Search learning tracks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 py-6 bg-background/50 border-border text-lg"
                            />
                        </div>
                    </motion.div>

                    <div className="grid gap-4 max-w-4xl mx-auto">
                        {learningTracks
                            .filter((track) =>
                                track.name
                                    .toLowerCase()
                                    .includes(searchQuery.toLowerCase())
                            )
                            .map((track, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeInUp}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.08,
                                    }}
                                >
                                    <Card
                                        className={`glass-card hover-lift cursor-pointer transition-all ${
                                            activeTrack === track.name
                                                ? "ring-2 ring-primary/50 glow-effect"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setActiveTrack(
                                                activeTrack === track.name
                                                    ? null
                                                    : track.name
                                            )
                                        }
                                    >
                                        <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                    <BookOpen className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-display text-lg font-bold">
                                                        {track.name}
                                                    </h3>
                                                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                                                        <span>
                                                            {track.courses}{" "}
                                                            Courses
                                                        </span>
                                                        <span>•</span>
                                                        <span>
                                                            {track.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <Badge
                                                    className={`${
                                                        track.demand ===
                                                        "Extremely High"
                                                            ? "bg-primary/10 text-primary border-primary/20"
                                                            : "bg-secondary text-secondary-foreground border-border"
                                                    }`}
                                                >
                                                    {track.demand} Demand
                                                </Badge>
                                                <Button
                                                    size="sm"
                                                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                                >
                                                    Enroll{" "}
                                                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Partner Colleges */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Building2 className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Our Network
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Trusted by{" "}
                            <span className="gradient-text">Top Colleges</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            We partner with India's premier institutions to
                            deliver world-class training at scale.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {partnerColleges.map((college, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                }}
                            >
                                <Card className="glass-card hover-lift text-center p-6 cursor-pointer group">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <GraduationCap className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg mb-1">
                                        {college.name}
                                    </h3>
                                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
                                        <MapPin className="w-3.5 h-3.5" />{" "}
                                        {college.location}
                                    </div>
                                    <span className="text-xs font-medium text-primary">
                                        {college.students} Students
                                    </span>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Benefits */}
            <section className="py-24 bg-card/30 border-y border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Why Quantum Training
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Your{" "}
                            <span className="gradient-text">
                                Unbeatale Advantage
                            </span>{" "}
                            in the Job Market
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to go from student to
                            industry-ready professional.
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
                                <Card className="glass-card hover-lift h-full group">
                                    <CardContent className="p-8">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                            <benefit.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold mb-3">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Star className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                Success Stories
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            From Campus to{" "}
                            <span className="gradient-text">Dream Careers</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Real stories from students who transformed their
                            careers with Quantum Training.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
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
                                        <div className="flex items-center gap-1 mb-4">
                                            {Array.from({
                                                length: story.rating,
                                            }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-primary text-primary"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-muted-foreground mb-6 italic">
                                            "{story.story}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                                {story.image}
                                            </div>
                                            <div>
                                                <div className="font-display font-bold">
                                                    {story.name}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {story.college}
                                                </div>
                                                <div className="text-sm font-medium text-primary">
                                                    {story.role}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-card/30 border-y border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Rocket className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                                How It Works
                            </span>
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Your Journey in{" "}
                            <span className="gradient-text">
                                4 Simple Steps
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Register & Verify",
                                desc: "Sign up with your college email and get verified within 24 hours.",
                            },
                            {
                                step: "02",
                                title: "Choose Your Track",
                                desc: "Pick from 6 industry-aligned tracks based on your career goals.",
                            },
                            {
                                step: "03",
                                title: "Learn & Build",
                                desc: "Complete courses, work on live projects, and earn certifications.",
                            },
                            {
                                step: "04",
                                title: "Get Placed",
                                desc: "Attend exclusive placement drives and land your dream job.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                className="text-center relative"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl font-display font-bold gradient-text">
                                        {item.step}
                                    </span>
                                </div>
                                <h3 className="font-display text-lg font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.desc}
                                </p>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-12">
                                        <ChevronRight className="w-6 h-6 text-primary/30 mx-auto" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,84%,50%,0.1)_0%,_transparent_50%)]" />
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            Ready to Launch Your
                            <br />
                            <span className="gradient-text">Tech Career?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Join 50,000+ students who've transformed their
                            careers with Quantum Training's college programs.
                            Your dream job is just one step away.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                            >
                                Apply for Free
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-border hover:bg-secondary/50 px-8 py-6 text-lg"
                            >
                                Download Brochure
                            </Button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                            {[
                                "No Fee Required",
                                "Placement Support",
                                "Industry Certifications",
                                "Live Projects",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-primary" />{" "}
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default College;
