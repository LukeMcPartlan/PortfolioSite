import { useProjects } from "@/hooks/use-portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { GraduationCap, Scroll } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
  const { data: projects } = useProjects();
  const educationProjects = projects?.filter(p => p.category === "Education") || [];

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
