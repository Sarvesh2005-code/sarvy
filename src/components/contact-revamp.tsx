"use client";

import { Mail, MessageCircle, Send } from "lucide-react";

export function ContactRevamp() {
    return (
        <section id="contact" className="w-full max-w-7xl mx-auto py-24 scroll-mt-24 px-4 md:px-0">
            <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Responds within 2 hours
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-foreground">Let&apos;s Collaborate</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            I&apos;m currently accepting new projects. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="bg-secondary p-6 rounded-2xl border border-border mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <MessageCircle className="text-primary" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">&quot;Sarvesh transformed our vision into reality. The attention to detail is unmatched.&quot;</p>
                                    <p className="text-xs text-muted-foreground mt-2">— Alex P., Tech Founder</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 text-foreground">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-muted-foreground">Email</span>
                                    <a href="mailto:hello@sarvesh.com" className="hover:text-primary transition-colors font-medium">hello@sarvesh.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col gap-5 bg-white/50 dark:bg-black/20 p-6 rounded-2xl border border-white/50 dark:border-white/5 backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-xs font-bold uppercase text-muted-foreground ml-1">Name</label>
                                <input type="text" id="name" placeholder="John Doe" className="input-apple" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-xs font-bold uppercase text-muted-foreground ml-1">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" className="input-apple" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className="text-xs font-bold uppercase text-muted-foreground ml-1">What can I help you with?</label>
                            <select id="subject" className="input-apple appearance-none cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Freelance Work</option>
                                <option>Design Consultation</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-xs font-bold uppercase text-muted-foreground ml-1">Your Message</label>
                            <textarea id="message" placeholder="Tell me a bit about your project goals and timeline..." className="input-apple h-32 resize-none"></textarea>
                        </div>

                        <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex justify-center items-center gap-2 mt-2 group/btn">
                            Send Message
                            <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
