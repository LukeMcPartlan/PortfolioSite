import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Gamepad2, Users, Bug, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const studentPortfolios = [
  {
    name: "Student Portfolio 1",
    url: "https://play.unity.com/ru/user/c0aa3e8a-1eb1-444c-a51e-8e1e1d55a767",
  },
  {
    name: "Student Portfolio 2",
    url: "https://play.unity.com/en/user/0cecae5e-dd28-4a4c-ae80-432845069353",
  },
  {
    name: "Student Portfolio 3",
    url: "https://play.unity.com/en/user/7764b99c-f413-454f-a417-7c98c4f7c3fc",
  },
];

const highlights = [
  {
    icon: Gamepad2,
    label: "Diverse Games",
    value: "Platformers, RPGs, Puzzlers & More",
  },
  {
    icon: Bug,
    label: "Debugging",
    value: "30+ Bespoke Projects Debugged Simultaneously",
  },
  {
    icon: TrendingUp,
    label: "Cumulative Plays",
    value: "1,000+ Across Student Games",
  },
  {
    icon: Users,
    label: "Scope",
    value: "Small Sampling of Full Student Work",
  },
];

export default function StudentPortfolios() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in">
      <div className="flex flex-wrap gap-2">
        <Link href="/education">
          <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Education
          </Button>
        </Link>
        <Link href="/game-design">
          <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Game Development
          </Button>
        </Link>
      </div>

      <div>
        <Badge className="mb-4 bg-primary text-white border-none">Education / Game Development</Badge>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4" data-testid="text-page-title">Student Game Portfolios</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          These portfolios represent a small sampling of the diverse games my students have built in Unity. From platformers to puzzle games, RPGs to action titles, students explored a wide range of genres and mechanics while learning C# and game design principles.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="aspect-video w-full bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80"
            alt="Unity game development"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-white/80 text-sm">Photo placeholder — replace with a screenshot of student work</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((h, idx) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
          >
            <Card className="p-5 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <h.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold">{h.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{h.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-display font-bold">Browse Student Portfolios</h2>
        <p className="text-muted-foreground">
          Click any portfolio below to explore the games students have published on Unity Play. Not all student games are included — this is a small sampling of the full body of work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studentPortfolios.map((portfolio, idx) => (
            <motion.div
              key={portfolio.url}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + 0.1 * idx }}
            >
              <a
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid={`link-student-portfolio-${idx + 1}`}
              >
                <Card className="p-6 hover-elevate cursor-pointer h-full flex flex-col items-center justify-center gap-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Gamepad2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{portfolio.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View on Unity Play</span>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4 border-t border-white/5 pt-8">
        <h2 className="text-2xl font-display font-bold">Teaching Impact</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Each student project required individual debugging support. As the sole CS educator, I developed the ability to simultaneously debug 30+ bespoke student game design projects, requiring deep understanding of each project's unique call stack and architecture.
          </p>
          <p>
            The diversity of student games — spanning multiple genres, mechanics, and complexity levels — demonstrates the breadth of the curriculum and the creative freedom students were given to explore their own ideas within the Unity engine.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Unity", "C#", "Game Development", "Teaching", "Student Work", "Debugging"].map(tag => (
          <Badge key={tag} variant="secondary" className="px-3 py-1 bg-secondary text-primary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
