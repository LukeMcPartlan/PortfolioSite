import { useProjects } from "@/hooks/use-portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { Trophy } from "lucide-react";

export default function CompetitiveGaming() {
  const { data: projects } = useProjects();
  const gamingProjects = projects?.filter(p => p.category === "Competitive Gaming") || [];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3" data-testid="text-page-title">
          <Trophy className="w-10 h-10 text-yellow-500" />
          Competitive Gaming
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          High-level competitive play, coaching championships, and tournament results across multiple titles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gamingProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
