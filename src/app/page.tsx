import { HeroRevamp } from "@/components/hero-revamp";
import { Projects } from "@/components/projects";
import { SkillsRevamp } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { ContactRevamp } from "@/components/contact-revamp";
import { FooterRevamp } from "@/components/footer-revamp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white transition-colors duration-300">

      <div className="flex flex-col items-center w-full">
        <HeroRevamp />

        {/* Selected Work */}
        <div className="w-full bg-secondary/30 border-y border-border">
          <Projects limit={3} />
        </div>

        <SkillsRevamp />
        <AboutSection />
        <ContactRevamp />
        <FooterRevamp />
      </div>
    </main>
  );
}
