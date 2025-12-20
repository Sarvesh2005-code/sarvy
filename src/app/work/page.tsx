import { Projects } from "@/components/projects";

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Selected Work
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A showcase of high-performance web products, from 3D experiences to complex dashboards.
                </p>
            </div>

            <Projects />
        </main>
    );
}

