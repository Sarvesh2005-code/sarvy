import { projects } from "@/lib/data";
import { getRepoData } from "@/lib/github";
import { ArrowLeft, ExternalLink, Github, Star, GitFork, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        notFound();
    }

    // Static data only
    const description = project.description;
    const stats = { stars: 0, forks: 0, homepage: null };

    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20">
            <article className="w-full max-w-4xl mx-auto px-4 md:px-0">
                <Link href="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>

                <div className="flex flex-col gap-6 mb-12">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-normal">{description}</p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <Link
                            href={stats?.homepage || `https://github.com/${project.repo}`}
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors"
                        >
                            <ExternalLink size={18} /> Visit Website
                        </Link>
                        <Link
                            href={`https://github.com/${project.repo}`}
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-bold rounded-full hover:bg-secondary/80 transition-colors border border-border"
                        >
                            <Github size={18} /> View Source
                        </Link>
                    </div>
                </div>

                <div className="w-full aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-border mb-16 bg-secondary/50">
                    {project.image ? (
                        <Image
                            src={`/images/${project.image}`}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${project.color}`}></div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 prose dark:prose-invert prose-lg max-w-none">
                        <h3>About the Project</h3>
                        <p>
                            {/* Placeholder for long description since we don't have it in data.ts yet */}
                            This project, <strong>{project.title}</strong>, represents a significant milestone in exploring {project.tags.join(", ")}.
                            Built with performance and scalability in mind, it leverages modern web technologies to deliver a seamless user experience.
                        </p>
                        <p>
                            The development process focused heavily on component modularity and responsive design, ensuring accessibility across all devices.
                        </p>
                        <h3>Key Features</h3>
                        <ul>
                            <li>Real-time performance optimization</li>
                            <li>Responsive UI/UX design</li>
                            <li>Integration with {project.tags[0]} ecosystem</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="p-6 rounded-2xl border border-border bg-surface">
                            <h4 className="font-bold text-lg mb-4">Project Info</h4>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground flex items-center gap-2 text-sm"><Star size={16} /> Stars</span>
                                    <span className="font-mono font-bold">{stats?.stars ?? 0}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground flex items-center gap-2 text-sm"><GitFork size={16} /> Forks</span>
                                    <span className="font-mono font-bold">{stats?.forks ?? 0}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground flex items-center gap-2 text-sm"><Calendar size={16} /> Updated</span>
                                    <span className="font-mono text-xs text-right">Recently</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </main>
    );
}
