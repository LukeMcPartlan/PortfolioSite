import { useRoute } from "wouter";
import { useProjects } from "@/hooks/use-portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Play, FolderOpen, Download } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

function isYouTubeEmbed(url?: string) {
  return url?.includes("youtube.com/embed");
}

function isUnityPlay(url?: string) {
  return url?.includes("play.unity.com");
}

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const { data: projects, isLoading } = useProjects();
  
  if (isLoading) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;
  
  const project = projects?.find(p => p.id === params?.id);
  
  if (!project) return <NotFound />;

  const renderMedia = () => {
    if (isYouTubeEmbed(project.embedUrl)) {
      return (
        <div className="space-y-4">
          <div>
            <Badge className="mb-4 bg-primary text-white border-none">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">{project.title}</h1>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                data-testid="iframe-youtube-embed"
              />
            </div>
          </div>
        </div>
      );
    }

    if (isUnityPlay(project.embedUrl)) {
      return (
        <div className="space-y-4">
          <div>
            <Badge className="mb-4 bg-primary text-white border-none">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">{project.title}</h1>
          </div>
          <a
            href={project.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            data-testid="link-play-game"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
              <div className="aspect-video w-full bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <span className="text-xl font-bold text-white">Play {project.title} Demo</span>
                <span className="text-sm text-white/60">Opens on Unity Play</span>
              </div>
            </div>
          </a>
        </div>
      );
    }

    return (
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
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in">
      <Link href={project.category === "Game Development" ? "/game-design" : "/computer-science"}>
        <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {project.category}
        </Button>
      </Link>

      {renderMedia()}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-display font-bold">About the Project</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            {(project.longDescription || project.description).split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          
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
                  {project.githubLink.includes("github.com") ? (
                    <><Github className="w-4 h-4" /> View Source</>
                  ) : (
                    <><FolderOpen className="w-4 h-4" /> View Source Files</>
                  )}
                </Button>
              </a>
            ) : (
               <Button disabled className="w-full gap-2 opacity-50 cursor-not-allowed" variant="outline">
                  <Github className="w-4 h-4" /> Source Private
                </Button>
            )}

            {project.downloadLink ? (
              <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full gap-2">
                  <Download className="w-4 h-4" /> Download on CurseForge
                </Button>
              </a>
            ) : project.demoLink ? (
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
