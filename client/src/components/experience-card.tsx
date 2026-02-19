import { Experience } from "@/hooks/use-portfolio-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Building2 } from "lucide-react";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="glass-card mb-6 last:mb-0 hover:border-white/20 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <h3 className="text-xl font-bold font-display text-foreground">{experience.title}</h3>
            <div className="flex items-center gap-2 text-primary mt-1">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit flex items-center gap-1.5 py-1.5 px-3">
            <CalendarDays className="w-3.5 h-3.5" />
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {experience.description.map((point, i) => (
            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
