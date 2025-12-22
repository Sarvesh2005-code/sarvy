"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, CheckCircle2, Paintbrush, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4 md:px-8">

            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

                {/* Left Content */}
                <div className="flex-1 flex flex-col items-start text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Available for new projects
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif text-foreground leading-[0.9] mb-6">
                            Sarvesh <br />
                            <span className="italic text-primary">Nakhale.</span>
                        </h1>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-4xl font-medium text-foreground mb-6 leading-tight max-w-xl"
                    >
                        Crafting digital <span className="text-blue-500 font-semibold">narratives</span> with precision.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-muted-foreground max-w-lg font-light leading-relaxed mb-10"
                    >
                        I merge clean code with thoughtful design to build coherent systems. An intersection where software engineering meets modern aesthetics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="#work" className="h-14 px-8 rounded-full bg-foreground text-background font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform">
                            Explore Work <ArrowRight size={20} />
                        </Link>
                        <Link href="https://github.com/Sarvesh2005-code" target="_blank" className="h-14 px-8 rounded-full border border-border text-foreground font-bold text-lg flex items-center gap-3 hover:bg-surface transition-colors group">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Github size={20} fill="currentColor" />
                            </div>
                            GitHub Profile
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - Abstract Cards */}
                <div className="flex-1 w-full flex items-center justify-center relative min-h-[500px]">

                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-primary/10 via-purple-500/10 to-blue-500/10 blur-[100px] rounded-full"></div>

                    <div className="relative w-full max-w-[500px] aspect-square">

                        {/* Back Card - Code */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -10, x: 50 }}
                            animate={{ opacity: 1, rotate: -6, x: 20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute top-0 right-0 w-[75%] aspect-[4/5] bg-white/20 dark:bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl p-6 flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-center">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-foreground backdrop-blur-md">
                                    <Code2 size={20} />
                                </div>
                                <span className="px-2 py-1 rounded-md bg-white/20 dark:bg-black/20 text-[10px] font-bold uppercase tracking-widest border border-white/10">NEW</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif italic text-foreground mb-2">Clean Code</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">Writing scalable, maintainable logic for complex applications.</p>
                            </div>
                            <div className="w-full h-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-full"></div>
                        </motion.div>

                        {/* Front Card - Design */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 10, y: 50 }}
                            animate={{ opacity: 1, rotate: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-10 left-0 w-[70%] aspect-square bg-[#0c0c0c]/80 dark:bg-[#151516]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/50 p-6 flex flex-col justify-between"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                                <Paintbrush size={24} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">UI Design</h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-light">Pixel-perfect interfaces focusing on usability and aesthetics.</p>
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#151516]"></div>
                                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#151516]"></div>
                                    <div className="w-8 h-8 rounded-full bg-primary border-2 border-[#151516]"></div>
                                </div>
                                <span className="text-xs font-medium text-gray-500">+ System</span>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
