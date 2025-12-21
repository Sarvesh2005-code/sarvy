import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white transition-colors duration-300">

      <div className="flex flex-col items-center w-full">
        <Hero />

        {/* Selected Work */}
        <div className="w-full bg-secondary/30 border-y border-border">
          <Projects limit={5} />
        </div>

        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
