import { Hero } from "@/components/hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      <section className="py-24 px-6 md:px-12 text-center bg-zinc-900/20">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-white">Curated Work</h2>
          <p className="text-lg text-muted-foreground">
            Explore a selection of high-performance web applications and 3D experiences.
          </p>
          <Link href="/work" className="inline-flex items-center gap-2 text-primary font-medium hover:text-orange-400 transition-colors">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <p>© {new Date().getFullYear()} Sarvesh Dadarao Nakhale. All rights reserved.</p>
      </footer>
    </main>
  );
}
