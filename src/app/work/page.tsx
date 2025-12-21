"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { Search, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Web Dev", "Mobile Apps", "UI/UX", "Experiments"];

export default function WorkPage() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || project.tags.some(tag => {
            // Mapping simplistic tags from data to categories for demo purposes
            if (filter === "Web Dev") return tag.includes("React") || tag.includes("Next") || tag.includes("Web");
            if (filter === "Mobile Apps") return tag.includes("Native") || tag.includes("iOS") || tag.includes("Android");
            if (filter === "UI/UX") return tag.includes("Figma") || tag.includes("Design");
            if (filter === "Experiments") return tag.includes("Three") || tag.includes("3D");
            return true;
        });
        return matchesSearch && matchesFilter;
    });

    return (
        <main className="min-h-screen bg-background text-foreground pt-36 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-primary">Portfolio v25</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">Selected Works</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl font-light">
                            A curated collection of applications, websites, and digital experiments crafted with precision and passion.
                        </p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-6 mb-16 justify-between items-center">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects by name, stack..."
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${filter === cat
                                        ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                                        : "bg-surface border border-border hover:bg-surface/80 text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            key={project.id}
                            className={`group relative rounded-[2rem] overflow-hidden bg-surface border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${project.size === 'featured' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/3]'}`}
                        >
                            <Link href={`/work/${project.id}`} className="block w-full h-full">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
                                    {project.image ? (
                                        <Image
                                            src={`/images/${project.image}`}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${project.color}`}></div>
                                    )}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex justify-between items-end mb-2">
                                            <div>
                                                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                                                    {project.tags[0]}
                                                </span>
                                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                        <p className="text-slate-300 text-sm line-clamp-2 max-w-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {project.description}
                                        </p>

                                        <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            {project.tags.slice(1, 3).map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs font-medium text-white/80 border border-white/10">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                        <button onClick={() => { setFilter("All"); setSearch("") }} className="mt-4 text-primary font-bold hover:underline">
                            Clear Filters
                        </button>
                    </div>
                )}

                <div className="mt-20 flex justify-center">
                    <div className="flex items-center gap-4 py-4 px-8 rounded-full border border-border bg-surface text-sm font-medium hover:border-primary/50 transition-colors cursor-pointer group">
                        <span>Load More Projects</span>
                        <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    );
}
