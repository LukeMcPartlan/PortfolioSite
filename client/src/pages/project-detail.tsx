import { useRoute } from "wouter";
import { useProjects } from "@/hooks/use-portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const { data: projects, isLoading } = useProjects();
  
  if (isLoading) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;
  
  const project = projects?.find(p => p.id === params?.id);
  
  if (!project) return <NotFound />;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in">
      <Link href={project.category === "Game Design" ? "/game-design" : "/computer-science"}>
        <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {project.category}
        </Button>
      </Link>

      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="aspect-video w-full bg-secondary">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <Badge className="mb-4 bg-primary text-white border-none">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{project.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-display font-bold">About the Project</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </p>
          
          <div className="pt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="px-3 py-1 bg-secondary text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl space-y-4">
            <h3 className="font-bold text-lg">Project Links</h3>
            
            {project.githubLink ? (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full gap-2" variant="outline">
                  <Github className="w-4 h-4" /> View Source
                </Button>
              </a>
            ) : (
               <Button disabled className="w-full gap-2 opacity-50 cursor-not-allowed" variant="outline">
                  <Github className="w-4 h-4" /> Source Private
                </Button>
            )}

            {project.demoLink ? (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Button>
              </a>
            ) : (
               <Button disabled className="w-full gap-2 opacity-50 cursor-not-allowed">
                  <ExternalLink className="w-4 h-4" /> Demo Unavailable
                </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
