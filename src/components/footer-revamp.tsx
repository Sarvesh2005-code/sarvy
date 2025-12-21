"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

export function FooterRevamp() {
    return (
        <footer className="w-full max-w-7xl mx-auto pt-10 pb-8 border-t border-border px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                            SN
                        </div>
                        <span className="font-bold text-lg tracking-tight text-foreground">Sarvesh Nakhale</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        A product designer & developer focused on crafting clean, user-centric interfaces. Available for freelance opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-foreground">Navigation</span>
                        <Link href="#work" className="text-muted-foreground hover:text-primary transition-colors">Work</Link>
                        <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
                        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                        <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-foreground">Socials</span>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter / X</Link>
                        <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">GitHub</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Dribbble</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-foreground">Legal</span>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
                <p className="text-xs text-muted-foreground">© 2025 Sarvesh Nakhale. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="mailto:hello@sarvesh.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
