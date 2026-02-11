import {
    GraduationCap,
    Twitter,
    Linkedin,
    Github,
    Youtube,
} from "lucide-react";
const footerLinks = {
    LearningPath: [
        { name: "DefSpace & IT Infra", href: "/roadmaps/defspace-it-infra" },
        { name: "Cloud & DevOps", href: "/roadmaps/cloud-devops" },
        { name: "Cybersecurity", href: "/roadmaps/cybersecurity-devsecops" },
        { name: "AI & Analytics", href: "/roadmaps/business-ai-analytics" },
    ],

    Courses: [
        {
            name: "Project Management",
            href: "/roadmaps/leadership-project-management",
        },
        { name: "Embedded & IoT", href: "/roadmaps/embedded-iot" },
        {
            name: "Programming Basics",
            href: "/roadmaps/programming-ds-essentials",
        },
    ],

    Internship: [
        { name: "Corporate", href: "/internship/corporate" },
        { name: "College", href: "/internship/college-university" },
        { name: "University", href: "/internship/college-university" },
    ],

    Company: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Resources", href: "/resources" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
    { icon: Youtube, href: "#" },
];

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-card/50">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <a href="/">
                                <img
                                    src="/QuantumTraining_.png"
                                    className="w-50"
                                    alt="logo"
                                />
                            </a>
                        </div>

                        <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                            The enterprise learning platform for technical
                            skills development and workforce transformation.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold mb-4">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2026 QuantumTraining . All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms-condition"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Terms of Condition
                        </a>
                        <a
                            href="/cookie-policy"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Cookie Policy
                        </a>
                        <a
                            href="/refund-cancellation"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Refund & Cancellation
                        </a>
                        <a
                            href="/accessibility"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Accessibility
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
