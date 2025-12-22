"use client";

import { motion } from "framer-motion";
import { Mail, Loader2, Send, MapPin, Linkedin, Twitter, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Using FormSubmit.co for maintenance-free emails.
            const response = await fetch("https://formsubmit.co/sarveshnakhale21@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="w-full max-w-7xl mx-auto py-24 px-4 md:px-8 relative">
            {status === "success" && <SuccessModal onClose={() => setStatus("idle")} />}
            <div className="flex flex-col md:flex-row gap-16">

                {/* Left Info */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                            Let's work <span className="italic text-primary">together.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 max-w-md font-light">
                            I'm always interested in new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="p-6 rounded-2xl bg-surface border border-border flex items-center gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Email</h4>
                                    <p className="text-lg font-medium text-foreground">sarveshnakhale21@gmail.com</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-surface border border-border flex items-center gap-4 hover:border-primary/50 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Location</h4>
                                    <p className="text-lg font-medium text-foreground">Badegaon, India</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <Link href="https://www.linkedin.com/in/sarveshnakhale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                                    <Linkedin size={20} />
                                </Link>
                                <Link href="https://x.com/Sarvyx2005" target="_blank" className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black transition-all">
                                    <Twitter size={20} />
                                </Link>
                                <Link href="https://github.com/Sarvesh2005-code" target="_blank" className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all">
                                    <Github size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Form */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-surface p-8 rounded-[2rem] border border-border shadow-2xl shadow-black/5"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-bold text-muted-foreground ml-2">Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    className="input-apple"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-bold text-muted-foreground ml-2">Email</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    className="input-apple"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-bold text-muted-foreground ml-2">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Tell me about your project or idea..."
                                    className="input-apple resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className="mt-2 h-14 w-full rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="animate-spin" /> Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle2 /> Sent Successfully!
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-surface border border-border p-8 rounded-[2rem] shadow-2xl max-w-sm w-full text-center"
            >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button onClick={onClose} className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors">
                    Close
                </button>
            </motion.div>
        </div>
    );
}
