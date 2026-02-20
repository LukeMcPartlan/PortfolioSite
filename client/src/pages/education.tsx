import { useProjects } from "@/hooks/use-portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { GraduationCap, Scroll, Gamepad2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Education() {
  const { data: projects } = useProjects();
  const educationProjects = projects?.filter(p => p.category === "Education" && p.id !== "student-portfolios") || [];
  const studentPortfolios = projects?.find(p => p.id === "student-portfolios");

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-green-500" />
            Education
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Teaching the next generation of engineers, developers, and designers.
          </p>
        </div>
      </div>

      {studentPortfolios && (
        <Link href="/student-portfolios">
          <Card className="glass-card overflow-visible cursor-pointer hover:border-primary/50 transition-colors" data-testid="card-student-portfolios-highlight">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Gamepad2 className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <h2 className="text-2xl font-display font-bold" data-testid="text-student-portfolios-title">{studentPortfolios.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{studentPortfolios.description}</p>
                <div className="flex flex-wrap gap-2">
                  {studentPortfolios.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <Button variant="outline" className="gap-2 mt-2">
                  <ExternalLink className="w-4 h-4" /> View Student Work
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden border border-white/10 aspect-video bg-secondary">
                {studentPortfolios.image && (
                  <img src={studentPortfolios.image} alt={studentPortfolios.title} className="w-full h-full object-cover" />
                )}
              </div>
            </div>
          </Card>
        </Link>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-display">
                <Scroll className="w-5 h-5 text-primary" />
                Degrees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-bold text-foreground">M.S. Mathematics Education 7-12</h4>
                <p className="text-sm text-muted-foreground">Lehman College, May 2020</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-bold text-foreground">B.S. Computer Science</h4>
                <p className="text-sm text-muted-foreground">Lehman College, May 2019</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-display">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>NYS CS K-12 Teaching Cert</li>
                <li>NYS Tech Teaching Cert</li>
                <li>NYS Math 7-12 Teaching Cert</li>
                <li>AlgoExpert Certificate</li>
                <li>BlockChain Expert Certificate</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
