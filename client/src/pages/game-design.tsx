import { useProjects } from "@/hooks/use-portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { Gamepad2 } from "lucide-react";

export default function GameDesign() {
  const { data: projects } = useProjects();
  const gameProjects = projects?.filter(p => p.category === "Game Design") || [];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
            <Gamepad2 className="w-10 h-10 text-primary" />
            Game Design
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Creating immersive, interactive experiences. From custom engines in Java to complex systems in Unity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
