"use client";

import { motion } from "framer-motion";
import { Code, Palette, Box, Terminal, Users, Zap, MessageSquare, Lightbulb, Brush } from "lucide-react";

export function Skills() {
    return (
        <section id="skills" className="w-full max-w-7xl mx-auto py-24 scroll-mt-24 px-4 md:px-0">
            {/* New Serif Header */}
            <div className="mb-20 text-left">
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-6">
                    Skills & <br /><span className="italic text-primary">Expertise.</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                    My technical toolkit is designed for speed and scalability. I combine modern frameworks with timeless design principles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Engineering Stack - Progress Bars */}
                <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Code size={120} className="text-primary transform rotate-12" />
                    </div>
                    <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Engineering Stack
                    </h3>
                    <div className="space-y-6 relative z-10">
                        {[
                            { name: "JavaScript / TypeScript", level: "EXPERT", width: "95%" },
                            { name: "React / Next.js ecosystem", level: "ADVANCED", width: "90%" },
                            { name: "CSS / Tailwind / Framer Motion", level: "EXPERT", width: "98%" },
                            { name: "Node.js / PostgreSQL", level: "INTERMEDIATE", width: "80%" },
                        ].map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-sm">{skill.name}</span>
                                    <span className="text-xs font-bold text-muted-foreground">{skill.level}</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.width }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(244,140,37,0.4)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Design & 3D */}
                <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-300 flex flex-col">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors"></div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        Design & 3D
                    </h3>
                    <div className="flex-1 flex flex-col gap-4">
                        {[
                            { name: "Figma", desc: "UI/UX Prototyping", icon: Palette, color: "text-purple-500", bg: "bg-purple-500/10" },
                            { name: "Blender", desc: "3D Modeling", icon: Box, color: "text-orange-500", bg: "bg-orange-500/10" },
                            { name: "Adobe Suite", desc: "Ps, Ai, Ae", icon: Brush, color: "text-blue-500", bg: "bg-blue-500/10" },
                        ].map(tool => (
                            <div key={tool.name} className="flex items-center gap-4 p-3 rounded-2xl bg-surface border border-border shadow-sm">
                                <div className={`w-10 h-10 rounded-xl ${tool.bg} flex items-center justify-center ${tool.color}`}>
                                    <tool.icon size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">{tool.name}</div>
                                    <div className="text-xs text-muted-foreground">{tool.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DevOps & Tools */}
                <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-300">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Terminal size={80} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        DevOps & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Git", "Docker", "AWS", "Vercel", "Jest", "Webpack", "Linux"].map(tool => (
                            <span key={tool} className="px-3 py-1 text-xs font-bold rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-300 flex flex-col justify-center">
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative z-10">
                        <div className="shrink-0">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Soft Skills
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-[200px]">The human side of technology that drives successful projects.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "Leadership", icon: Users },
                                { name: "Agile", icon: Zap },
                                { name: "Communication", icon: MessageSquare },
                                { name: "Problem Solving", icon: Lightbulb },
                            ].map(skill => (
                                <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm">
                                    <skill.icon size={16} className="text-blue-500" />
                                    <span className="text-sm font-bold">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
