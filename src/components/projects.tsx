"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Eatos",
        description: "High-performance mobile food delivery app built with React Native and Expo.",
        tags: ["React Native", "Expo", "Firebase"],
        link: "#",
        github: "#",
        color: "from-orange-500/20 to-red-500/20",
        size: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        id: 2,
        title: "Audemars Piguet Clone",
        description: "Pixel-perfect luxury eCommerce frontend replica with complex animations.",
        tags: ["Next.js", "GSAP", "Tailwind"],
        link: "#",
        github: "#",
        color: "from-neutral-800/50 to-neutral-900/50",
        size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
        id: 3,
        title: "Ideayaan",
        description: "Immersive 3D-inspired hackathon landing page with smooth scroll & parallax.",
        tags: ["React", "Three.js", "Framer Motion"],
        link: "#",
        github: "#",
        color: "from-blue-500/10 to-purple-500/10",
        size: "col-span-1 md:col-span-1 row-span-2",
    },
    {
        id: 4,
        title: "Float",
        description: "Web-based game portal featuring parallax effects and mobile responsiveness.",
        tags: ["Next.js", "Canvas API", "TypeScript"],
        link: "#",
        github: "#",
        color: "from-emerald-500/10 to-teal-500/10",
        size: "col-span-1 md:col-span-2 row-span-1",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Selected Work
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {projects.map((project, index) => (
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
                                    <Link href={project.github} className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white text-muted-foreground transition-colors">
                                        <Github size={18} />
                                    </Link>
                                    <Link href={project.link} className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white text-muted-foreground transition-colors">
                                        <ExternalLink size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </h3>
                                <p className="text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
