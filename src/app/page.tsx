

import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      {/* Selected Work (Limited to 2 items but preserving bento layout) */}
      <Projects limit={2} />

      <TechStack />

      <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Need a high-performance web product? I'm always open to discussing new projects and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:sarveshnakhale21@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                <Mail size={20} /> sarveshnakhale21@gmail.com
              </a>
              <a href="https://github.com/Sarvesh2005-code" target="_blank" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-3">
                <Github size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sarveshnakhale" target="_blank" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-3">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form className="flex flex-col gap-4">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all" />
              <textarea rows={3} placeholder="Message" className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all resize-none" />
              <button type="button" className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
                Send <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <p>© {new Date().getFullYear()} Sarvesh Dadarao Nakhale. All rights reserved.</p>
      </footer>
    </main>
  );
}
