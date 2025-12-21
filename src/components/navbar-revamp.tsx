"use client";

import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function NavbarRevamp() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300">
            <div className="w-full max-w-7xl glass-panel rounded-full px-6 py-3 shadow-lg flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                        SN
                    </div>
                    <span className="font-bold text-sm tracking-tight hidden sm:block">
                        Sarvesh Nakhale
                    </span>
                </Link>

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

                    <button
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                        }}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={16} />}
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
