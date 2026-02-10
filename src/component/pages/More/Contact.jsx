import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Globe,
    Headphones,
    Building2,
    ArrowRight,
    CheckCircle2,
    Users,
    Zap,
    Shield,
    Star,
} from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get a response within 24 hours",
        value: "hello@quantumtraining.com",
        action: "mailto:hello@quantumtraining.com",
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Mon-Fri from 9am to 6pm IST",
        value: "+91 98765 43210",
        action: "tel:+919876543210",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Come say hello at our office",
        value: "Bangalore, Karnataka, India",
        action: "#",
    },
    {
        icon: MessageSquare,
        title: "Live Chat",
        description: "Available 24/7 for quick help",
        value: "Start a conversation",
        action: "#",
    },
];

const offices = [
    {
        city: "Bangalore",
        country: "India",
        type: "Headquarters",
        timezone: "IST (UTC+5:30)",
    },
    {
        city: "Mumbai",
        country: "India",
        type: "Regional Office",
        timezone: "IST (UTC+5:30)",
    },
    {
        city: "Delhi NCR",
        country: "India",
        type: "Training Center",
        timezone: "IST (UTC+5:30)",
    },
    {
        city: "Hyderabad",
        country: "India",
        type: "Tech Hub",
        timezone: "IST (UTC+5:30)",
    },
];

const faqs = [
    {
        q: "How quickly can we start corporate training?",
        a: "We can onboard your team within 48 hours of signing up. Our dedicated success manager will guide you through the entire setup process.",
    },
    {
        q: "Do you offer custom training programs?",
        a: "Absolutely! We design tailored curricula based on your organization's specific skill gaps and goals, with industry-expert instructors.",
    },
    {
        q: "What certifications do you provide?",
        a: "We offer 50+ industry-recognized certifications across cybersecurity, cloud, AI/ML, data science, and more.",
    },
    {
        q: "Is there a free trial available?",
        a: "Yes! We offer a 14-day free trial with full access to our platform, courses, and analytics dashboard.",
    },
    {
        q: "How do you measure training ROI?",
        a: "Our analytics dashboard tracks skill progression, completion rates, assessment scores, and provides detailed ROI reports for stakeholders.",
    },
];

const stats = [
    { value: "500K+", label: "Learners Trained" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "<2hr", label: "Avg Response Time" },
    { value: "24/7", label: "Support Available" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0,84%,50%,0.08),transparent_60%)]" />
                <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Headphones className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                We're Here to Help
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question, partnership inquiry, or need
                            enterprise training solutions? Our team is ready to
                            help you transform your workforce.
                        </p>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="glass-card p-5 text-center hover-lift"
                            >
                                <div className="text-3xl font-bold gradient-text font-display">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-6">
                        {contactMethods.map((method, i) => (
                            <motion.a
                                key={i}
                                href={method.action}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 hover-lift group cursor-pointer block"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <method.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 font-display">
                                    {method.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    {method.description}
                                </p>
                                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                                    {method.value}{" "}
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Info */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="glass-card p-8 md:p-10">
                                <h2 className="text-3xl font-bold mb-2 font-display">
                                    Send Us a Message
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Fill out the form and our team will get back
                                    to you within 24 hours.
                                </p>

                                {submitted ? (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 font-display">
                                            Message Sent!
                                        </h3>
                                        <p className="text-muted-foreground">
                                            We'll get back to you within 24
                                            hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">
                                                    Full Name *
                                                </label>
                                                <Input
                                                    required
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className="bg-background/50"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">
                                                    Email Address *
                                                </label>
                                                <Input
                                                    required
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className="bg-background/50"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">
                                                    Company
                                                </label>
                                                <Input
                                                    placeholder="Your Company"
                                                    value={formData.company}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            company:
                                                                e.target.value,
                                                        })
                                                    }
                                                    className="bg-background/50"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">
                                                    Phone
                                                </label>
                                                <Input
                                                    placeholder="+91 98765 43210"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            phone: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className="bg-background/50"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium mb-2 block">
                                                Subject *
                                            </label>
                                            <Input
                                                required
                                                placeholder="How can we help?"
                                                value={formData.subject}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        subject: e.target.value,
                                                    })
                                                }
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium mb-2 block">
                                                Message *
                                            </label>
                                            <Textarea
                                                required
                                                rows={5}
                                                placeholder="Tell us about your requirements..."
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        message: e.target.value,
                                                    })
                                                }
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12"
                                        >
                                            <Send className="w-5 h-5 mr-2" />{" "}
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Side Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Why Contact Us */}
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-lg mb-4 font-display">
                                    Why Choose Quantum Training?
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: Users,
                                            text: "Dedicated success manager for your organization",
                                        },
                                        {
                                            icon: Zap,
                                            text: "Custom training paths tailored to your needs",
                                        },
                                        {
                                            icon: Shield,
                                            text: "Enterprise-grade security & compliance",
                                        },
                                        {
                                            icon: Star,
                                            text: "Industry-recognized certifications included",
                                        },
                                        {
                                            icon: Globe,
                                            text: "Multi-language support for global teams",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <item.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="glass-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold text-lg font-display">
                                        Office Hours
                                    </h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Monday - Friday
                                        </span>
                                        <span className="font-medium">
                                            9:00 AM - 6:00 PM
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Saturday
                                        </span>
                                        <span className="font-medium">
                                            10:00 AM - 4:00 PM
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Sunday
                                        </span>
                                        <span className="font-medium text-primary">
                                            Closed
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick CTA */}
                            <div className="glass-card p-6 bg-primary/5 border-primary/20">
                                <Building2 className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold text-lg mb-2 font-display">
                                    Enterprise Solutions
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Need training for 50+ employees? Get a
                                    custom quote with volume pricing.
                                </p>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                                    Request Enterprise Demo
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Offices */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl font-bold mb-4 font-display">
                            Our <span className="gradient-text">Offices</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Find us at one of our locations across India
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offices.map((office, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 hover-lift text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg font-display">
                                    {office.city}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {office.type}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    {office.timezone}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl font-bold mb-4 font-display">
                            Frequently Asked{" "}
                            <span className="gradient-text">Questions</span>
                        </h2>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setOpenFaq(openFaq === i ? null : i)
                                    }
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="font-semibold pr-4">
                                        {faq.q}
                                    </span>
                                    <span
                                        className={`text-primary text-xl shrink-0 transition-transform ${
                                            openFaq === i ? "rotate-45" : ""
                                        }`}
                                    >
                                        +
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="px-5 pb-5"
                                    >
                                        <p className="text-muted-foreground text-sm">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-16 text-center glow-effect max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Ready to{" "}
                            <span className="gradient-text">Transform</span>{" "}
                            Your Team?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join 500K+ professionals who've accelerated their
                            careers with Quantum Training.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
                            >
                                Start Free Trial{" "}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="font-semibold text-lg px-8"
                            >
                                Schedule a Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
