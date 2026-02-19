import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Gamepad2, Code2, GraduationCap, Trophy, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const categories = [
    {
      title: "Game Design",
      icon: Gamepad2,
      desc: "Creating immersive worlds with Unity & C#",
      href: "/game-design",
      color: "text-purple-400"
    },
    {
      title: "Computer Science",
      icon: Code2,
      desc: "Full-stack development & architecture",
      href: "/computer-science",
      color: "text-blue-400"
    },
    {
      title: "Education",
      icon: GraduationCap,
      desc: "Teaching the next generation of devs",
      href: "/education",
      color: "text-green-400"
    },
    {
      title: "Esports",
      icon: Trophy,
      desc: "Coaching & competitive achievements",
      href: "/esports",
      color: "text-yellow-400"
    }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background blur-3xl opacity-30" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 p-1 mb-8 shadow-2xl shadow-primary/20"
        >
          {/* Avatar Placeholder - In real app use actual photo */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-3xl font-display font-bold text-white overflow-hidden">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-white">LM</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
        >
          Luke <span className="text-gradient-primary">McPartlan-Alvarez</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
        >
          Versatile Computer Science educator, developer, and game designer passionate about bringing industry-standard tools into education.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 text-muted-foreground"
        >
          <a href="mailto:Lukemcp45@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors" data-testid="link-email">
            <Mail className="w-5 h-5" />
            <span>Lukemcp45@gmail.com</span>
          </a>
          <a href="tel:+19143103734" className="flex items-center gap-2 hover:text-foreground transition-colors" data-testid="link-phone">
            <Phone className="w-5 h-5" />
            <span>(914) 310-3734</span>
          </a>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link key={cat.title} href={cat.href}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="group h-full p-6 glass-card rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className={`p-3 rounded-xl bg-secondary w-fit mb-4 group-hover:bg-primary/20 transition-colors ${cat.color}`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* Quick Stats / Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-white/5">
        <div className="text-center md:text-left">
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Location</h4>
          <p className="text-lg">Yonkers, NY</p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Education</h4>
          <p className="text-lg">M.S. Mathematics Education</p>
          <p className="text-muted-foreground">Lehman College</p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Expertise</h4>
          <p className="text-lg">Unity, C#, Python, Full Stack</p>
        </div>
      </section>
    </div>
  );
}
