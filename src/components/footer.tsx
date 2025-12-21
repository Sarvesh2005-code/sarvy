"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-16 px-4 md:px-8">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold">SN</div>
                        <span className="font-bold text-lg">Sarvesh Nakhale</span>
                    </Link>
                    <p className="text-muted-foreground text-sm max-w-xs font-light">
                        Crafting digital narratives with code and design. Built with Next.js & Tailwind.
                    </p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-24">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Sitemap</h4>
                        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
                        <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors text-sm">Work</Link>
                        <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</Link>
                        <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Socials</h4>
                        <Link href="https://www.linkedin.com/in/sarveshnakhale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</Link>
                        <Link href="https://github.com/Sarvesh2005-code" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</Link>
                        <Link href="https://x.com/Sarvyx2005" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</Link>
                        <Link href="mailto:sarveshnakhale21@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">Email</Link>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Sarvesh Nakhale. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                    <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
