"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Selected Work
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A showcase of high-performance web products, from 3D experiences to complex dashboards.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.color} min-h-[400px] flex flex-col justify-between p-8 hover:border-white/20 transition-all hover:scale-[1.01]`}
                    >
                        {/* Background Placeholder Gradient */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                        <div className="relative z-10 flex justify-between items-start">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-black/40 text-white/80 backdrop-blur-md border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Link href={project.github} target="_blank" className="p-3 rounded-full bg-black/40 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-md">
                                    <Github size={20} />
                                </Link>
                                <Link href={project.link} target="_blank" className="p-3 rounded-full bg-black/40 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-md">
                                    <ExternalLink size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                {project.title}
                            </h2>
                            <p className="text-lg text-white/80 line-clamp-3">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
