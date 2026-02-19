import { Project } from "@/hooks/use-portfolio-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="glass-card border-white/5 overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20 backdrop-blur-md">
            {project.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs border-white/10 text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-white/5 gap-2">
        <Link href={project.id === "student-portfolios" || project.id === "student-portfolios-gd" ? "/student-portfolios" : `/project/${project.id}`} className="w-full">
          <Button className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-white transition-all duration-300 group-hover:translate-y-0">
            View Details <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
