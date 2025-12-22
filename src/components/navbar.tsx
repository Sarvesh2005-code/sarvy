"use client";

import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const navLinks = ["Home", "Work", "Skills", "Contact"];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300">
                <div className="w-full max-w-7xl glass-panel rounded-full px-6 py-3 shadow-lg flex items-center justify-between relative z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-white/20 dark:border-white/10">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="relative w-8 h-8 group-hover:scale-110 transition-transform">
                            <img src="/logo.png" alt="S" className="object-contain w-full h-full" />
                        </div>
                        <span className="font-serif font-bold text-sm tracking-tight hidden sm:block">
                            Sarvy
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => {
                            const href = item === "Home" ? "/" : item === "Work" ? "/work" : `/#${item.toLowerCase()}`;
                            return (
                                <Link
                                    key={item}
                                    href={href}
                                    className="text-sm font-medium hover:text-primary transition-colors text-foreground/80 hover:scale-105 transform duration-200"
                                >
                                    {item}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                setTheme(resolvedTheme === "dark" ? "light" : "dark");
                            }}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {mounted && resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={16} />}
                        </button>

                        <button
                            aria-label="Menu"
                            className="md:hidden p-2 text-current z-50 relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <motion.div
                                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isMobileMenuOpen ? <div className="font-bold text-lg">✕</div> : <Menu size={24} />}
                            </motion.div>
                        </button>

                        <Link
                            href="#contact"
                            className="hidden sm:flex bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center space-y-8"
                >
                    {navLinks.map((item) => {
                        const href = item === "Home" ? "/" : item === "Work" ? "/work" : `/#${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                href={href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-serif font-medium text-foreground hover:text-primary transition-colors"
                            >
                                {item}
                            </Link>
                        );
                    })}
                </motion.div>
            )}
        </>
    );
}
