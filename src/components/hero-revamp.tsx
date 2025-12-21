"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Brush, Terminal } from "lucide-react";
import Link from "next/link";

export function HeroRevamp() {
    return (
        <section className="layout-container flex flex-col items-center pt-24 pb-10 px-4 md:px-8 overflow-hidden w-full">
            <div className="w-full max-w-7xl min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 py-10 md:py-20 relative">
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-start gap-8 z-10 md:pr-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for work
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-gradient-apple"
                    >
                        Hi, I&apos;m <br />
                        <span className="text-primary">Sarvesh Nakhale.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed text-balance"
                    >
                        A creative Product Designer & Developer crafting digital experiences where motion meets function. I build the future of web interfaces.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 mt-2"
                    >
                        <Link
                            href="#work"
                            className="flex items-center gap-2 h-12 px-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform duration-300"
                        >
                            See Projects
                            <ArrowDown size={16} />
                        </Link>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="flex items-center gap-2 h-12 px-8 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 font-bold transition-all duration-300"
                        >
                            <Github size={20} />
                            GitHub
                        </Link>
                    </motion.div>
                </div>

                {/* Right Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full relative flex items-center justify-center h-[400px] md:h-auto"
                >
                    <div className="relative w-full aspect-square max-w-[500px]">
                        {/* Glow Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>

                        {/* Glass Card Container */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-2xl animate-float flex items-center justify-center bg-surface-dark/5 dark:bg-surface-light/5">
                            {/* Abstract inner content - Simulating the 3D shape from the image using CSS/Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-80"
                                style={{ backgroundImage: `url('/images/project_ideayaan_abstract.png')` }} // Using one of our abstract images as a base
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none"></div>

                            {/* Floating Icons */}
                            <div className="absolute top-10 right-10 p-3 bg-surface/80 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transform rotate-6 animate-[float_4s_ease-in-out_infinite_1s]">
                                <Brush className="text-foreground text-3xl" />
                            </div>
                            <div className="absolute bottom-20 left-10 p-3 bg-surface/80 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transform -rotate-3 animate-[float_5s_ease-in-out_infinite_0.5s]">
                                <Terminal className="text-foreground text-3xl" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats Bar */}
            <div className="w-full max-w-7xl py-10 border-y border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col gap-1">
                        <span className="text-4xl font-black text-foreground tracking-tight">5+</span>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Years Experience</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-4xl font-black text-foreground tracking-tight">20+</span>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Projects Shipped</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-4xl font-black text-foreground tracking-tight">12+</span>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Clients Served</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
