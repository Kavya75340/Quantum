import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Quantum Training 's embedded, IoT Software Track program helped me transition from IT support to a software role in just 6 months. The hands-on labs made all the difference.",
        author: "Neha Singh",
        role: "Tech Lead",
        company: "HCL",
        image: "/neha.jpeg",
    },
    {
        quote: "We've trained over 50+ employees on Quantum Training . The analytics dashboard gives us complete visibility into skill development across the organization.",
        author: "Ritesham Shastri",
        role: "Director",
        company: "Rapidcode Technologies",
        image: "/ritesham.png",
    },
    {
        quote: "The Cloud Engineering & DevOps courses are incredibly comprehensive. I earned my TensorFlow certification and landed a role as a Cloud Engineer & DevOps Engineer.",
        author: "Nishant Sharma",
        role: "Solution Architecture",
        company: "Coralogix",
        image: "/nishant.jpeg",
    },
];

const logos = [
    "Microsoft",
    "Google",
    "Amazon",
    "Meta",
    "IBM",
    "Cisco",
    "Oracle",
    "Salesforce",
];

export const Testimonials = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium mb-4 block">
                        TESTIMONIALS
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Trusted by{" "}
                        <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        See how professionals and organizations are transforming
                        their careers and workforce with Quantum Training .
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 hover-lift"
                        >
                            <Quote className="w-10 h-10 text-primary/30 mb-4" />
                            <p className="text-foreground mb-6 leading-relaxed">
                                “{testimonial.quote}”
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role},{" "}
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Company Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="text-sm text-muted-foreground mb-8 uppercase">
                        Our Trainees Are Trusted by Top Companies Across the
                        Globe
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {logos.map((logo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                }}
                                className="text-xl font-display font-bold text-black/40 hover:text-black transition-colors"
                            >
                                {logo}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
