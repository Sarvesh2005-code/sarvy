"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Star, GitFork, Eye, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface RepoData {
    stars?: number;
    forks?: number;
    description?: string | null;
    homepage?: string | null;
}

interface Project extends RepoData {
    id: number;
    title: string;
    repo: string;
    tags: string[];
    image: string;
    color: string;
    size: string;
}

interface ProjectsGridProps {
    projects: Project[];
    limit?: number;
    className?: string;
    title?: string;
    description?: string;
}

export function ProjectsGrid({ projects, limit, className, title = "Selected Work", description = "Showcase of my latest development projects." }: ProjectsGridProps) {
    return (
        <section id="work" className={cn("w-full max-w-7xl mx-auto py-24 px-4 md:px-0", className)}>
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-foreground">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>
                {limit && (
                    <Link href="/work" className="text-primary font-medium hover:underline hidden sm:block">
                        View All Projects
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={cn(
                            "group relative overflow-hidden rounded-[2rem] bg-surface/50 border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm",
                            // Custom Bento Logic for 5 items
                            limit === 5 && index === 0 ? "md:col-span-2 md:row-span-2 md:h-[600px]" :
                                limit === 5 && index === 1 ? "md:col-span-1 md:row-span-1 md:h-[290px]" :
                                    limit === 5 && index === 2 ? "md:col-span-1 md:row-span-1 md:h-[290px]" :
                                        limit === 5 && index === 3 ? "md:col-span-1 md:row-span-2 md:h-[600px]" : // Bottom Left Vertical
                                            limit === 5 && index === 4 ? "md:col-span-2 md:row-span-2 md:h-[600px]" : // Bottom Right Wide
                                                // Default fallback
                                                project.size === 'featured' ? 'col-span-1 md:col-span-2 row-span-2 h-[600px]' : project.size,

                            // Height handling
                            !project.size.includes('row-span') && limit !== 5 && 'h-[300px]'
                        )}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
                            {project.image ? (
                                <Image
                                    src={`/images/${project.image}`}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${project.color}`} />
                            )}
                        </div>

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                                    {project.tags[0] || "Project"} {/* Use first tag as category */}
                                </span>
                                <Link href={`/work/${project.id}`} className="hover:text-primary transition-colors inline-block">
                                    <h3 className="text-white text-2xl font-bold mb-2">
                                        {project.title}
                                    </h3>
                                </Link>
                                {/* Description hidden by default or shown line-clamped */}
                                <p className="text-slate-300 text-sm mb-4 max-w-md line-clamp-2">
                                    {project.description || "A high-performance web project."}
                                </p>

                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-2 group-hover:translate-y-0">
                                    <Link
                                        href={project.homepage || `https://github.com/${project.repo}`}
                                        target="_blank"
                                        className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-1"
                                    >
                                        <Eye size={16} /> Live Demo
                                    </Link>
                                    <Link
                                        href={`https://github.com/${project.repo}`}
                                        target="_blank"
                                        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full hover:bg-white/20 transition-colors flex items-center gap-1"
                                    >
                                        <Code size={16} /> GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {limit && (
                <div className="mt-8 flex justify-center md:hidden">
                    <Link href="/work" className="text-primary font-medium hover:underline">
                        View All Projects
                    </Link>
                </div>
            )}
        </section>
    );
}
