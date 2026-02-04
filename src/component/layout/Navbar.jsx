import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/component//ui/button.jsx";

const navItems = [
    {
        label: "Platform",
        submenu: [
            {
                label: "Learning Management",
                description: "Complete LMS solution",
            },
            {
                label: "Analytics Dashboard",
                description: "Track learner progress",
            },
            {
                label: "Certifications",
                description: "Industry-recognized certs",
            },
        ],
    },
    {
        label: "Courses",
        submenu: [
            { label: "Cybersecurity", description: "Protect digital assets" },
            { label: "Data Science", description: "Master data analytics" },
            { label: "Cloud Computing", description: "AWS, Azure, GCP" },
            {
                label: "AI & Machine Learning",
                description: "Build intelligent systems",
            },
        ],
    },
    {
        label: "Solutions",
        submenu: [
            { label: "Enterprise", description: "Scale your workforce" },
            { label: "Government", description: "Public sector training" },
            { label: "Education", description: "Universities & colleges" },
        ],
    },
    { label: "Pricing" },
    { label: "Resources" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="font-display font-bold text-xl">
                            QuantumTraining
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setActiveMenu(item.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                    {item.label}
                                    {item.submenu && (
                                        <ChevronDown className="w-4 h-4" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {item.submenu &&
                                        activeMenu === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-72 glass-card p-2 shadow-lg"
                                            >
                                                {item.submenu.map((subitem) => (
                                                    <a
                                                        key={subitem.label}
                                                        href="#"
                                                        className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                                                    >
                                                        <div className="font-medium text-foreground">
                                                            {subitem.label}
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {
                                                                subitem.description
                                                            }
                                                        </div>
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Sign In
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                            Start Free Trial
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href="#"
                                        className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                                <div className="pt-4 space-y-2 border-t border-border">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        Sign In
                                    </Button>
                                    <Button className="w-full bg-primary text-primary-foreground">
                                        Start Free Trial
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
