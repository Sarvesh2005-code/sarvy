export interface RepoData {
    stars: number;
    forks: number;
    description: string | null;
    homepage: string | null;
}

export async function getRepoData(repoName: string): Promise<RepoData | null> {
    try {
        const res = await fetch(`https://api.github.com/repos/${repoName}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            console.warn(`Failed to fetch repo ${repoName}: ${res.statusText}`);
            return null; // Return null to handle gracefully
        }

        const data = await res.json();
        return {
            stars: data.stargazers_count,
            forks: data.forks_count,
            description: data.description,
            homepage: data.homepage,
        };
    } catch (error) {
        console.error(`Error fetching repo ${repoName}:`, error);
        return null;
    }
}
