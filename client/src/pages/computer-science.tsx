import { useProjects } from "@/hooks/use-portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { Code2 } from "lucide-react";

export default function ComputerScience() {
  const { data: projects } = useProjects();
  const csProjects = projects?.filter(p => p.category === "Computer Science") || [];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
            <Code2 className="w-10 h-10 text-blue-500" />
            Computer Science
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Full stack development, machine learning experiments, and algorithmic challenges.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {csProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
