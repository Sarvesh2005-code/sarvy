"use client";

import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function NavbarRevamp() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300">
            <div className="w-full max-w-[1024px] glass-panel rounded-full px-6 py-3 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        SN
                    </div>
                    <span className="font-bold text-sm tracking-tight hidden sm:block">
                        Sarvesh Nakhale
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["Work", "Skills", "About", "Journey", "Contact"].map((item) => {
                        const href = item === "Work" ? "/work" : `/#${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                href={href}
                                className="text-sm font-medium hover:text-primary transition-colors text-foreground/80"
                            >
                                {item}
                            </Link>
                        )
                    })}
                </div>

                <div className="flex items-center gap-3">
                    <button aria-label="Menu" className="md:hidden p-2 text-current">
                        <Menu size={24} />
                    </button>

                    {/* Theme Toggle Placeholder - Functionality can be wired up later if using next-themes */}
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                        <Sun size={18} />
                    </button>

                    <Link
                        href="#contact"
                        className="hidden sm:flex bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    );
}
