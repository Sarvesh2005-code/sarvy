"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectsProps {
    limit?: number;
    className?: string;
}

export function Projects({ limit, className }: ProjectsProps) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="projects" className={cn("py-24 px-6 md:px-12 max-w-7xl mx-auto", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 mb-16"
            >
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                            Selected Work
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full mt-4" />
                    </div>
                    {limit && (
                        <Link href="/work" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            View All Projects <ArrowUpRight size={18} />
                        </Link>
                    )}
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {displayProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.color} p-8 hover:border-white/20 transition-colors ${project.size}`}
                    >
                        <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] -z-10 transition-colors group-hover:bg-background/30" />

                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <Link href={project.github} target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white text-muted-foreground transition-colors">
                                        <Github size={18} />
                                    </Link>
                                    <Link href={project.link} target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white text-muted-foreground transition-colors">
                                        <ExternalLink size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 block md:hidden" />
                                </h3>
                                <p className="text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        {/* Mobile Touch Ripple / Gradient Hint */}
                        <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {limit && (
                <div className="mt-12 flex justify-center md:hidden">
                    <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                        View All Projects <ArrowUpRight size={18} />
                    </Link>
                </div>
            )}
        </section>
    );
}
