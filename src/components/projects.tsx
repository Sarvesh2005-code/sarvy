import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Star, GitFork } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { getRepoData } from "@/lib/github";

interface ProjectsProps {
    limit?: number;
    className?: string;
}

export async function Projects({ limit, className }: ProjectsProps) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    // Pre-fetch GitHub data for all projects
    const projectsWithStats = await Promise.all(
        displayProjects.map(async (project) => {
            const stats = await getRepoData(project.repo);
            return { ...project, ...stats };
        })
    );

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                {projectsWithStats.map((project, index) => (
                    <div
                        key={project.id}
                        className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all ${project.size}`}
                    >
                        {/* Background Image / Gradient */}
                        <div className="absolute inset-0 z-0">
                            {project.image ? (
                                <Image
                                    src={`/images/${project.image}`}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105 transform"
                                />
                            ) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        </div>

                        <div className="h-full flex flex-col justify-between relative z-10 p-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Live GitHub Stats */}
                                {(project.stars !== undefined && project.stars !== null) && (
                                    <div className="hidden group-hover:flex items-center gap-3 text-xs font-medium text-white/70 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <span className="flex items-center gap-1"><Star size={12} className="text-yellow-400" /> {project.stars}</span>
                                        <span className="flex items-center gap-1"><GitFork size={12} /> {project.forks}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <Link href={`https://github.com/${project.repo}`} target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-md">
                                            <Github size={18} />
                                        </Link>
                                        {/* Use homepage if available, else repo link */}
                                        <Link href={project.homepage || `https://github.com/${project.repo}`} target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-md">
                                            <ExternalLink size={18} />
                                        </Link>
                                    </div>
                                </div>

                                <p className="text-gray-300 line-clamp-2 text-sm leading-relaxed">
                                    {project.description || "A high-performance web project."}
                                </p>
                            </div>
                        </div>
                    </div>
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
