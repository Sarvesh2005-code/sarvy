"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 px-6 md:px-12 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Let's Connect
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Need a high-performance web product? I'm always open to discussing new projects and opportunities.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-white mb-2">Email Me</h3>
                        <a href="mailto:sarveshnakhale21@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                            <Mail size={18} /> sarveshnakhale21@gmail.com
                        </a>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-white mb-2">Socials</h3>
                        <div className="flex flex-col gap-3">
                            <a href="https://github.com/Sarvesh2005-code" target="_blank" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                                <Github size={18} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sarveshnakhale" target="_blank" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                                <Linkedin size={18} /> LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form Placeholder (UI Only) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-muted-foreground">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-muted-foreground">Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-muted-foreground">Message</label>
                            <textarea rows={4} placeholder="I have an idea..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" />
                        </div>
                        <button type="button" className="mt-2 w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
                            Send Message
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
