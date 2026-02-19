import { useAchievements } from "@/hooks/use-portfolio-data";
import { Trophy, Crown, Target, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Esports() {
  const { data: achievements } = useAchievements();
  
  const coaching = achievements?.filter(a => a.category === "Coaching") || [];
  const personal = achievements?.filter(a => a.category === "Personal") || [];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
          <Trophy className="w-10 h-10 text-yellow-500" />
          Esports
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Competitive achievements, high-level coaching, and content creation.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl text-center">
          <div className="text-3xl font-bold font-display text-primary mb-1">Top 500</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Overwatch Americas</div>
        </div>
        <div className="glass-card p-4 rounded-xl text-center">
          <div className="text-3xl font-bold font-display text-primary mb-1">0.5%</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">MultiVersus Global</div>
        </div>
        <div className="glass-card p-4 rounded-xl text-center">
          <div className="text-3xl font-bold font-display text-primary mb-1">#1</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Guild Raid Leader</div>
        </div>
        <div className="glass-card p-4 rounded-xl text-center">
          <div className="text-3xl font-bold font-display text-primary mb-1">33k</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Peak YT Views</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coaching Column */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-500" />
            Coaching Highlights
          </h2>
          <div className="space-y-4">
            {coaching.map((item) => (
              <Card key={item.id} className="bg-secondary/30 border-white/5 hover:border-yellow-500/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500/20 bg-yellow-500/10">
                      {item.game}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Column */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-red-500" />
            Competitive Records
          </h2>
          <div className="space-y-4">
            {personal.map((item) => (
              <Card key={item.id} className="bg-secondary/30 border-white/5 hover:border-red-500/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <Badge variant="outline" className="text-muted-foreground border-white/10">
                      {item.game}
                    </Badge>
                  </div>
                  {item.detail && <p className="text-muted-foreground">{item.detail}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Content Creation Section */}
      <div className="bg-secondary/20 rounded-2xl p-8 border border-white/5">
        <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
          <Medal className="w-6 h-6 text-purple-500" />
          Content Creation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-muted-foreground text-sm mb-1">Peak YouTube Views</div>
            <div className="text-2xl font-bold text-foreground">33,000+</div>
          </div>
          <div>
            <div className="text-muted-foreground text-sm mb-1">Peak TikTok Views</div>
            <div className="text-2xl font-bold text-foreground">3,800+</div>
          </div>
          <div>
            <div className="text-muted-foreground text-sm mb-1">Avg Views (2 week experiment)</div>
            <div className="text-2xl font-bold text-foreground">~1,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
