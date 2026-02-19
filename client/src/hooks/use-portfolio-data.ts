// Since this is a static site, we simulate data fetching with hooks that return hardcoded data.
// This maintains the architecture if we ever want to switch to a real backend.

import { useQuery } from "@tanstack/react-query";
import axonautsImg from "@assets/image_1771537857944.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "Game Design" | "Computer Science" | "Education" | "Esports";
  tags: string[];
  link?: string;
  demoLink?: string;
  githubLink?: string;
  image?: string;
  embedUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  category: "Education" | "Esports" | "Other";
}

export interface Achievement {
  id: string;
  game: string;
  title: string;
  detail?: string;
  category: "Personal" | "Coaching";
}

const PROJECTS: Project[] = [
  {
    id: "axonauts",
    title: "Axonauts",
    description: "Story-driven roguelike RPG inspired by Slay the Spire.",
    longDescription: "A pre-alpha roguelike RPG that combines deck-building mechanics with narrative depth. As the sole developer, I handled all aspects of design, coding (C#), and art assets.",
    category: "Game Design",
    tags: ["Unity", "C#", "Game Design", "Solo Dev"],
    image: axonautsImg,
    demoLink: "https://play.unity.com/en/games/ff12099c-e8f8-40e2-b26e-6c3f90204942/axonauts-pre-alpha-demo-003",
    embedUrl: "https://play.unity.com/en/games/ff12099c-e8f8-40e2-b26e-6c3f90204942/axonauts-pre-alpha-demo-003",
  },
  {
    id: "bazaargen",
    title: "BazaarGen",
    description: "User-generated content platform with 50+ users.",
    longDescription: "A full-stack web application enabling users to create and share content. Features include Google OAuth authentication, database integration, and a responsive UI.",
    category: "Computer Science",
    tags: ["Node.js", "PostgreSQL", "OAuth", "Web Dev"],
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80", // Code screen
  },
  {
    id: "ai-ml-bees",
    title: "AI/ML Bees",
    description: "Machine learning project with 90% success rate on complex tasks.",
    longDescription: "An experimental project using Unity ML-Agents to train agents (bees) to perform complex navigation and resource gathering tasks using reinforcement learning.",
    category: "Computer Science",
    tags: ["Unity", "ML-Agents", "Python", "C#", "AI"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // AI/Neural net
  },
  {
    id: "java-engine",
    title: "Java Game Engine",
    description: "Custom game engine built entirely from scratch. All games built in this engine are under 1MB total.",
    longDescription: "A foundational computer science project exploring the architecture of game engines. Implements rendering loops, physics detection, and entity management without external game libraries. A standout achievement: the total file size for all games built in this engine are under a megabyte, demonstrating extreme efficiency and deep understanding of low-level programming.",
    category: "Game Design",
    tags: ["Java", "Engine Architecture", "Computer Graphics"],
    image: "https://img.youtube.com/vi/Q5191kdaQ3E/maxresdefault.jpg",
    demoLink: "https://www.youtube.com/watch?v=Q5191kdaQ3E",
    githubLink: "https://www.dropbox.com/scl/fo/ko8e5aqrjel3d800hvus0/AOwuwE3TPtOg_-kO8ZKqTaE?rlkey=w70vvjv5vy8s4u8dtflbgpqx7&st=jipegznd&dl=0",
    embedUrl: "https://www.youtube.com/embed/Q5191kdaQ3E",
  },
  {
    id: "student-portfolios",
    title: "Student Game Portfolios",
    description: "A sampling of student-built Unity games with 1,000+ cumulative plays across portfolios.",
    longDescription: "These three student portfolios represent just a small sampling of the diverse games my students have created in Unity. From platformers to puzzle games, RPGs to action titles, students explored a wide range of genres and mechanics. Each project required individual debugging support — across dozens of bespoke student projects, I developed the ability to simultaneously debug 30+ unique game codebases, each with its own architecture and call stack. Together, these student games have accumulated over 1,000 plays on Unity Play, demonstrating real engagement with their work. Note: not all student games are included here — this is a small sampling of the full body of work.",
    category: "Education",
    tags: ["Unity", "C#", "Teaching", "Game Design", "Student Work"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    link: "#student-portfolios",
  },
  {
    id: "student-portfolios-gd",
    title: "Student Game Portfolios",
    description: "A sampling of student-built Unity games with 1,000+ cumulative plays across portfolios.",
    longDescription: "These three student portfolios represent just a small sampling of the diverse games my students have created in Unity. From platformers to puzzle games, RPGs to action titles, students explored a wide range of genres and mechanics. Each project required individual debugging support — across dozens of bespoke student projects, I developed the ability to simultaneously debug 30+ unique game codebases, each with its own architecture and call stack. Together, these student games have accumulated over 1,000 plays on Unity Play, demonstrating real engagement with their work. Note: not all student games are included here — this is a small sampling of the full body of work.",
    category: "Game Design",
    tags: ["Unity", "C#", "Teaching", "Game Design", "Student Work"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    link: "#student-portfolios",
  },
  {
    id: "ryan-roaster",
    title: "RyanRoaster Bot",
    description: "Discord Bot utilizing OpenAI API for interaction.",
    longDescription: "A community engagement bot for Discord that leverages OpenAI's GPT models to generate humorous and context-aware responses.",
    category: "Computer Science",
    tags: ["Node.js", "OpenAI API", "Discord.js"],
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80", // Robot/Bot
  }
];

const EXPERIENCE: Experience[] = [
  {
    id: "east-ramapo",
    title: "High School CS & Game Design Teacher",
    company: "East Ramapo School District",
    period: "Sep 2024 - Present",
    description: [
      "Teaching Unity game design and web development to high school students.",
      "Designing and delivering project-based curriculum covering C#, game mechanics, and industry-standard workflows."
    ],
    category: "Education"
  },
  {
    id: "yonkers",
    title: "Math Teacher (Algebra)",
    company: "Yonkers School District",
    period: "Sep 2023 - Jun 2024",
    description: [
      "Taught 7th, 8th, and 9th grade Algebra sections.",
      "Achieved 180% average annual growth per iReady Diagnostic Testing — 80% above the district average."
    ],
    category: "Education"
  },
  {
    id: "suny-orange",
    title: "Computer Science Adjunct Professor",
    company: "SUNY Orange College",
    period: "Sep 2023 - Jan 2024",
    description: [
      "Delivered college-level Computer Science instruction.",
      "Deepened understanding of skills students need to thrive in STEM programs."
    ],
    category: "Education"
  },
  {
    id: "middletown",
    title: "Computer Science Teacher",
    company: "Middletown City School District",
    period: "Sep 2020 - Jun 2023",
    description: [
      "Founded district's first Esports program (90% players rose from <40th percentile to >80th globally; 3 interstate 1st place wins).",
      "Designed 7th-8th grade CS curriculum and taught Python.",
      "Established Robotics Summer Camp (battlebots).",
      "Collaborated on $83M school renovation for Esports/tech facilities."
    ],
    category: "Education"
  }
];

const ACHIEVEMENTS: Achievement[] = [
  { id: "owl", game: "Overwatch", title: "OWL Season 1 VIP", detail: "Backstage access as Coach, met pros & celebs", category: "Coaching" },
  { id: "hs-esports", game: "Rocket League", title: "Interstate Varsity Trophy", detail: "Fall Season Champions", category: "Coaching" },
  { id: "hs-esports-jv", game: "Rocket League", title: "Interstate JV Trophy", detail: "Winter Season Champions", category: "Coaching" },
  { id: "ow-rank", game: "Overwatch", title: "Top 500", detail: "Americas Region", category: "Personal" },
  { id: "dbd", game: "Dead By Daylight", title: "Max Rank", detail: "$200 tournament earnings", category: "Personal" },
  { id: "wow", game: "World of Warcraft", title: "Raid Leader #1 Guild", detail: "Garona Server, multiple server firsts", category: "Personal" },
  { id: "hearthstone", game: "Hearthstone", title: "Peak Rank 1500", detail: "Americas Region", category: "Personal" },
  { id: "hots", game: "Heroes of the Storm", title: "Top 64 Tespa Nationals", detail: "Highest ranked Diablo in Americas", category: "Personal" },
  { id: "multiversus", game: "Multi-Versus", title: "Top 7000 Superman", detail: "Top 0.5 percentile globally", category: "Personal" },
  { id: "halo", game: "Halo Infinite", title: "Onyx Rank 1650", category: "Personal" }
];

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => PROJECTS,
    staleTime: Infinity
  });
}

export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => EXPERIENCE,
    staleTime: Infinity
  });
}

export function useAchievements() {
  return useQuery({
    queryKey: ["achievements"],
    queryFn: async () => ACHIEVEMENTS,
    staleTime: Infinity
  });
}
