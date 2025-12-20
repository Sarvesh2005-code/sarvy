"use client";

import { motion } from "framer-motion";
import {
    Code2, Database, Layout, Server, Smartphone,
    Terminal, Cpu, Globe, Layers, Box
} from "lucide-react";

const stack = [
    { name: "Next.js", icon: Globe },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Terminal },
    { name: "Tailwind", icon: Layout },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "React Native", icon: Smartphone },
    { name: "Three.js", icon: Box },
    { name: "Framer Motion", icon: Layers },
    { name: "System Design", icon: Cpu },
];

export function TechStack() {
    return (
        <section className="py-24 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-2xl font-semibold text-white/50">Technologies I use</h2>
            </div>

            <div className="relative flex w-full">
                {/* Gradients for smooth fade in/out */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Slow loop
                    }}
                >
                    {/* Double the array to create seamless loop */}
                    {[...stack, ...stack, ...stack].map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 text-muted-foreground group">
                            <tech.icon size={24} className="group-hover:text-primary transition-colors" />
                            <span className="text-xl font-medium group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
