import { motion } from "framer-motion";
import { Card, CardContent } from "@/component/ui/card";

const RoadmapSection = ({ data }) => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {data.title}{" "}
                        <span className="gradient-text">Learning Path</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {data.subtitle}
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden lg:block -translate-x-1/2" />

                    <div className="space-y-12">
                        {data.steps.map((step, index) => (
                            <motion.div
                                key={step.phase}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex items-center gap-8 ${
                                    index % 2 === 0
                                        ? "lg:flex-row"
                                        : "lg:flex-row-reverse"
                                }`}
                            >
                                {/* Card */}
                                <div className="flex-1">
                                    <Card className="glass-card hover-lift overflow-hidden">
                                        <CardContent className="p-0">
                                            {/* Header */}
                                            <div
                                                className={`${step.color} p-4`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                                                        <step.icon className="w-6 h-6 text-primary-foreground" />
                                                    </div>

                                                    <div>
                                                        <div className="text-sm text-primary-foreground/80">
                                                            {step.phase}
                                                        </div>
                                                        <div className="text-xl font-bold text-primary-foreground">
                                                            {step.title}
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto text-sm px-3 py-1 rounded-full bg-background/20 text-primary-foreground">
                                                        {step.duration}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Skills */}
                                            <div className="p-6">
                                                <div className="grid grid-cols-2 gap-3">
                                                    {step.skills.map(
                                                        (skill) => (
                                                            <div
                                                                key={skill}
                                                                className="flex items-center gap-2 text-sm text-muted-foreground"
                                                            >
                                                                <step.checkIcon className="w-4 h-4 text-primary" />
                                                                {skill}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Timeline Number */}
                                <div className="hidden lg:flex w-16 h-16 rounded-full bg-primary border-4 border-background shadow-lg items-center justify-center z-10">
                                    <span className="text-lg font-bold text-primary-foreground">
                                        {index + 1}
                                    </span>
                                </div>

                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
