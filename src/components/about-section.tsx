"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
    return (
        <>
            {/* About Me Section */}
            <section id="about" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10">
                            {/* Using a placeholder image or one of the abstracts for now if no portrait available */}
                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                                <span className="text-sm">Portrait Placeholder</span>
                                {/* Ideally user drops a photo here later */}
                            </div>
                        </div>
                        <div className="absolute -top-6 -left-6 w-full h-full border border-primary/20 rounded-3xl -z-0 hidden md:block"></div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-surface rounded-3xl -z-10 shadow-lg hidden md:block opacity-50"></div>
                    </div>

                    <div className="order-1 md:order-2 flex flex-col gap-8">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">About Me.</h2>
                        <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed text-lg font-light">
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
                        <div className="pt-4">
                            <Link href="#" className="inline-flex items-center text-primary font-bold hover:underline">
                                More about my journey
                                <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section id="timeline" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-0">
                <div className="flex items-center gap-4 mb-12 px-2">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Professional Journey</h2>
                    <div className="h-[1px] bg-gradient-to-r from-primary/50 to-transparent flex-1"></div>
                </div>

                <div className="relative mx-4 md:mx-0">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>
                    <div className="flex flex-col gap-12 md:gap-24">

                        {/* Item 1 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                            <div className="hidden md:block w-[45%]"></div>
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_0_4px_rgba(244,140,37,0.2)] transform -translate-x-1/2 z-10"></div>
                            <div className="w-full md:w-[45%] pl-8 md:pl-0 md:group-odd:text-right md:group-even:text-left">
                                <div className="glass-panel p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">2023 - Present</span>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Senior Product Engineer</h3>
                                    <p className="text-sm font-medium text-muted-foreground mb-3">TechFlow Systems</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">Leading the frontend architecture for the flagship SaaS product. Implemented a new design system reducing development time by 40%.</p>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
                            <div className="hidden md:block w-[45%]"></div>
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-muted transform -translate-x-1/2 z-10 group-hover:border-primary group-hover:bg-primary transition-colors"></div>
                            <div className="w-full md:w-[45%] pl-8 md:pl-0 md:text-left">
                                <div className="glass-panel p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-muted-foreground bg-secondary rounded-full">2021 - 2023</span>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Product Designer</h3>
                                    <p className="text-sm font-medium text-muted-foreground mb-3">Creative Solutions Inc.</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">Designed and prototyped user interfaces for mobile applications. Collaborated closely with developers to ensure pixel-perfect implementation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                            <div className="hidden md:block w-[45%]"></div>
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-muted transform -translate-x-1/2 z-10 group-hover:border-primary group-hover:bg-primary transition-colors"></div>
                            <div className="w-full md:w-[45%] pl-8 md:pl-0 md:text-right">
                                <div className="glass-panel p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-muted-foreground bg-secondary rounded-full">2019 - 2021</span>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Junior Frontend Dev</h3>
                                    <p className="text-sm font-medium text-muted-foreground mb-3">WebCorp</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">Started my professional journey building responsive websites. Mastered HTML, CSS, and vanilla JavaScript during this period.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
