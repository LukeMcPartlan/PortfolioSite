import { useProjects } from "@/hooks/use-portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { Gamepad2, ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function GameDesign() {
  const { data: projects } = useProjects();
  const gameProjects = projects?.filter(p => p.category === "Game Design") || [];
  const axonauts = gameProjects.find(p => p.id === "axonauts");
  const otherProjects = gameProjects.filter(p => p.id !== "axonauts");

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

      {axonauts && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-yellow-400">Flagship Project — Start Here</h2>
          </div>
          <Link href="/project/axonauts">
            <div className="group relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10 cursor-pointer hover:border-primary/60 transition-all duration-300" data-testid="card-axonauts-featured">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto md:min-h-[320px] overflow-hidden">
                  <img
                    src={axonauts.image}
                    alt={axonauts.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden" />
                </div>
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-primary text-white border-none">Core Project</Badge>
                    <Badge variant="outline" className="border-yellow-400/30 text-yellow-400">Scope Rivals Indie Releases</Badge>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold group-hover:text-primary transition-colors">
                    {axonauts.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {axonauts.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {axonauts.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs border-white/10 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Button className="gap-2">
                      Explore Project <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      <div>
        <h2 className="text-2xl font-display font-bold mb-6">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
