"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto py-24 px-4 md:px-8">
            {/* Section Header */}
            <div className="mb-20">
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-6">
                    About <span className="italic text-primary">Me.</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                    A glimpse into my professional world and the journey that brought me here.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Personal Intro */}
                <div className="flex flex-col gap-8">
                    <div className="bg-surface/50 border border-border rounded-[2rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-bold mb-6 text-foreground">The Designer & Developer</h3>
                        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
                            <p>
                                I have always been fascinated by the intersection of design and technology. What started as tweaking HTML on Myspace pages turned into a career crafting enterprise-level applications.
                            </p>
                            <p>
                                I believe that good design is invisible. It should just work. My approach combines data-driven insights with creative intuition to build products that are not only beautiful but also accessible and performant.
                            </p>
                            <p>
                                When I&apos;m not pushing pixels, you can find me hiking the trails or experimenting with 3D modeling in Blender.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Timeline */}
                <div className="relative pl-8 border-l border-border/50 space-y-12">
                    {[
                        { year: "2023 - Present", role: "Senior Product Engineer", company: "TechFlow Systems", desc: "Leading the frontend architecture for the flagship SaaS product. Implemented a new design system reducing development time by 40%." },
                        { year: "2021 - 2023", role: "Product Designer", company: "Creative Solutions Inc.", desc: "Designed and prototyped user interfaces for mobile applications. Collaborated closely with developers to ensure pixel-perfect implementation." },
                        { year: "2019 - 2021", role: "Junior Frontend Dev", company: "WebCorp", desc: "Started my professional journey building responsive websites. Mastered HTML, CSS, and vanilla JavaScript during this period." }
                    ].map((job, index) => (
                        <div key={index} className="relative group">
                            {/* Dot */}
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-border group-hover:bg-primary group-hover:scale-110 transition-all duration-300"></span>

                            <div className="flex flex-col gap-2 group-hover:-translate-x-[-10px] transition-transform duration-300">
                                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60 mb-1 flex items-center gap-2">
                                    <Calendar size={12} /> {job.year}
                                </span>
                                <h4 className="text-xl font-bold text-foreground">{job.role}</h4>
                                <span className="text-primary font-medium text-sm flex items-center gap-1 mb-2">
                                    <Briefcase size={14} /> {job.company}
                                </span>
                                <p className="text-muted-foreground font-light leading-relaxed text-sm max-w-md">
                                    {job.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
