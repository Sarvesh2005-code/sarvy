"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";

export function About() {
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
                                I’m a Computer Science student and web developer who enjoys building real, usable products from scratch.
                            </p>
                            <p>
                                My journey started with curiosity — tweaking layouts, breaking things, and rebuilding them better. Over time, this evolved into a strong focus on clean architecture, performance, and user-centered design.
                            </p>
                            <p>
                                I believe good design should feel effortless and good code should scale without pain. I aim to build systems that are simple on the surface but powerful underneath.
                            </p>
                            <p>
                                Outside of coding, I explore 3D design, UI motion, and product ideas — always thinking about how technology can feel more human.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Timeline */}
                <div className="relative pl-8 border-l border-border/50 space-y-12">
                    {[
                        { year: "2024 - Present", role: "Independent Developer & Student", company: "Project Work", desc: "Building personal projects, experimenting with SaaS ideas, and strengthening full-stack skills with modern frameworks." },
                        { year: "2023 - 2024", role: "Frontend & UI Engineering Focus", company: "Self-Driven Learning", desc: "Worked extensively with React, Next.js, Tailwind CSS, and animations. Built multiple dashboards, tools, and portfolio-grade projects." },
                        { year: "2021 - 2023", role: "Learning & Foundations", company: "Web Development", desc: "Started with HTML, CSS, and JavaScript. Developed strong fundamentals in web development and problem-solving." }
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
