"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
            {/* Background Gradient Mesh (Optional subtle touch) */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Web Developer. Designer. Builder.
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white"
                >
                    I design and build{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                        high-performance
                    </span>{" "}
                    web products.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance"
                >
                    Minimally designed. Lighting fast. Scalable.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8"
                >
                    <a href="#projects" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold transition-transform hover:scale-105 active:scale-95">
                        View Work
                        <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
