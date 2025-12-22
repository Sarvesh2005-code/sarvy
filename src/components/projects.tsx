import { projects } from "@/lib/data";
import { ProjectsGrid } from "./projects-grid";

interface ProjectsProps {
    limit?: number;
    className?: string;
    title?: string;
    description?: string;
}

// export async function Projects({ limit, className, title, description }: ProjectsProps) {
//     const displayProjects = limit ? projects.slice(0, limit) : projects;

//     // Pre-fetch GitHub data using API
//     // Ensure we handle potential errors or null returns in the data fetching logic internally if needed,
//     // but getRepoData returns a standard object structure (or nulls).
//     // Mapping to ensure types match what ProjectsGrid expects.
//     const projectsWithStats = await Promise.all(
//         displayProjects.map(async (project) => {
//             const stats = await getRepoData(project.repo);
//             return {
//                 ...project,
//                 stars: stats?.stars ?? 0,
//                 forks: stats?.forks ?? 0,
//                 description: stats?.description ?? project.description, // Fallback to local desc if API fails/is null
//                 homepage: stats?.homepage ?? null
//             };
//         })
//     );

//     return <ProjectsGrid
//         projects={projectsWithStats}
//         limit={limit}
//         className={className}
//         title={title || "Selected Work"}
//         description={description || "A curated selection of projects that define my technical journey."}
//     />;
// }

export function Projects({ limit, className, title, description }: ProjectsProps) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    // Static mapping
    const projectsWithStats = displayProjects.map(project => ({
        ...project,
        stars: 0,
        forks: 0,
        homepage: null
    }));

    return <ProjectsGrid
        projects={projectsWithStats}
        limit={limit}
        className={className}
        title={title || "Selected Work"}
        description={description || "A curated selection of projects that define my technical journey."}
    />;
}
