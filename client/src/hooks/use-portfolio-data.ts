// Since this is a static site, we simulate data fetching with hooks that return hardcoded data.
// This maintains the architecture if we ever want to switch to a real backend.

import { useQuery } from "@tanstack/react-query";
import axonautsImg from "@assets/image_1771537857944.png";
import trumpismsImg from "@assets/image_1771542364908.png";
import beesImg from "@assets/image_1771542399519.png";
import bazaargenImg from "@assets/image_1771542435820.png";
import discordImg from "@assets/discord-bot-preview.png";
import beesTensorboardImg from "@assets/image_1771542749213.png";
import crownsImg from "@assets/crowns-of-power-preview.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "Game Development" | "Computer Science" | "Education" | "Esports";
  tags: string[];
  link?: string;
  demoLink?: string;
  githubLink?: string;
  image?: string;
  extraImages?: { src: string; caption: string }[];
  embedUrl?: string;
  downloadLink?: string;
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
    description: "Core game design project — a roguelike RPG whose implemented scope rivals many modern indie releases. Features turn-based combat, modular abilities, party system, and deep tooltip systems.",
    longDescription: "Axonauts is my flagship game design project — a story-driven roguelike RPG inspired by Slay the Spire, Darkest Dungeon, and Hades whose implemented scope is larger than many modern indie roguelike releases. As sole developer, I designed and built every system from scratch in Unity/C#.\n\nThe game features a full conversation system with branching dialogue, turn-based combat with strategic depth, and a modular ability system where abilities can be used by both enemies and allies — meaning every ability in the game is a shared building block rather than hardcoded per character.\n\nCharacters are fully modular, supporting party system mechanics that let players reconfigure their party composition on the fly. The UI includes responsive tooltips that dynamically break down the massive amount of information players need: buffs, debuffs, targeting rules, ability effects, passive triggers, status durations, and much more — all surfaced contextually so the player is never overwhelmed.\n\nThe architecture required to support this level of systemic depth — where any ability can interact with any character, any buff can stack or conflict with any debuff, and tooltips must accurately reflect the current game state — represents a significant engineering challenge that goes well beyond typical indie scope.",
    category: "Game Development",
    tags: ["Unity", "C#", "Game Development", "Solo Dev", "Turn-Based Combat", "Roguelike"],
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
    image: bazaargenImg,
  },
  {
    id: "ai-ml-bees",
    title: "ML Agents Unity Bees",
    description: "Bee agents trained to gather pollen in 3D using PyTorch and Unity ML-Agents. Built a novel reward system that outperformed curriculum-based training.",
    longDescription: "Bee agents trained to gather pollen in three dimensions in Unity, built on PyTorch and Unity ML-Agents.\n\nThe most technically interesting part of this project was the reward system. I initially used a curriculum approach — pretraining the model to touch the pollen, then running a second training phase to bring the pollen back to the hive. However, I ended up achieving much faster training by bundling all the rewards into a single training run, where each step in the process gives 100x the reward of the previous step.\n\nThe curriculum and step-based systems trained faster at first, but over very long training periods they lost out to the single unified goal with no intermediate follow-up. The TensorBoard logs below show the comparison across training approaches.",
    category: "Computer Science",
    tags: ["Unity", "ML-Agents", "PyTorch", "Python", "C#", "AI"],
    image: beesImg,
    githubLink: "https://github.com/LukeMcPartlan/MLAgentsUnityBees",
    extraImages: [
      { src: beesTensorboardImg, caption: "TensorBoard training logs — while curriculum-based approaches initially learned faster, the raw unified reward version took longer but ultimately achieved higher fidelity" },
    ],
  },
  {
    id: "crowns-of-power",
    title: "Crowns of Power",
    description: "A metroidvania rage game with 6 bosses, a bullet hell final boss, 5 dungeons, and 4 unique traversal powers — built in one week.",
    longDescription: "Crowns of Power is a metroidvania rage game featuring 6 bosses, a bullet hell final boss, 5 dungeons to explore, and 4 unique powers for traversing the map. The game is open-ended with multiple solutions to every encounter.\n\nThis game was built in approximately one week — roughly 50 hours of development — while working full time as a teacher. All artwork in the game was a collaboration: professional-quality art was created by Cole Gates, while the remaining assets were created by me. Built in Unity as a submission for the Bigmode Game Jam 2025.",
    category: "Game Development",
    tags: ["Unity", "C#", "Metroidvania", "Game Jam", "Pixel Art"],
    image: crownsImg,
    demoLink: "https://bows.itch.io/crowns-of-power",
  },
  {
    id: "java-engine",
    title: "Java Game Engine",
    description: "Custom game engine built entirely from scratch. All games built in this engine are under 1MB total.",
    longDescription: "A foundational computer science project exploring the architecture of game engines. Implements rendering loops, physics detection, and entity management without external game libraries. A standout achievement: the total file size for all games built in this engine are under a megabyte, demonstrating extreme efficiency and deep understanding of low-level programming.",
    category: "Game Development",
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
    tags: ["Unity", "C#", "Teaching", "Game Development", "Student Work"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    link: "#student-portfolios",
  },
  {
    id: "hytale-modding",
    title: "Hytale Modding",
    description: "Skyrim Giants mod for Hytale — published on CurseForge with 250+ players.",
    longDescription: "A mod created for Hytale, the upcoming game from Hypixel Studios. This project involved modding game assets and mechanics to bring Skyrim-inspired giants into the Hytale universe. Published on CurseForge for the community to download and use, the mod has attracted over 250 players.",
    category: "Game Development",
    tags: ["Hytale", "Modding", "CurseForge", "Game Development"],
    image: "https://img.youtube.com/vi/xjPS6X0wRWY/maxresdefault.jpg",
    githubLink: "https://github.com/LukeMcPartlan/HytaleMod",
    embedUrl: "https://www.youtube.com/embed/xjPS6X0wRWY",
    downloadLink: "https://www.curseforge.com/hytale/mods/skyrim-giants",
  },
  {
    id: "student-portfolios-gd",
    title: "Student Game Portfolios",
    description: "A sampling of student-built Unity games with 1,000+ cumulative plays across portfolios.",
    longDescription: "These three student portfolios represent just a small sampling of the diverse games my students have created in Unity. From platformers to puzzle games, RPGs to action titles, students explored a wide range of genres and mechanics. Each project required individual debugging support — across dozens of bespoke student projects, I developed the ability to simultaneously debug 30+ unique game codebases, each with its own architecture and call stack. Together, these student games have accumulated over 1,000 plays on Unity Play, demonstrating real engagement with their work. Note: not all student games are included here — this is a small sampling of the full body of work.",
    category: "Game Development",
    tags: ["Unity", "C#", "Teaching", "Game Development", "Student Work"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    link: "#student-portfolios",
  },
  {
    id: "competitive-trumpisms",
    title: "Competitive Trumpisms",
    description: "Full-stack web app where users rate Trump quotes in head-to-head Elo-ranked matchups across categories.",
    longDescription: "Competitive Trumpisms is a full-stack web application that lets users rate the most iconic, funny, and outrageous Trump quotes in head-to-head matchups. Users vote on pairs of quotes within three categories — Iconic, Funny, and Evil — and after 10 votes, unlock an Elo-based leaderboard showing how the community ranks each quote.\n\nThe app features category-based voting, real-time vote tracking, and a competitive ranking system inspired by chess Elo ratings. Built with a modern web stack including React, Node.js, and PostgreSQL.",
    category: "Computer Science",
    tags: ["React", "Node.js", "PostgreSQL", "Web Dev", "Elo Rating"],
    image: trumpismsImg,
    demoLink: "https://trump-rating--lukemcp45.replit.app/",
  },
  {
    id: "ryan-roaster",
    title: "RyanRoaster Bot",
    description: "Discord Bot utilizing OpenAI API for interaction.",
    longDescription: "A community engagement bot for Discord that leverages OpenAI's GPT models to generate humorous and context-aware responses.",
    category: "Computer Science",
    tags: ["Node.js", "OpenAI API", "Discord.js"],
    image: discordImg,
  }
];

const EXPERIENCE: Experience[] = [
  {
    id: "east-ramapo",
    title: "High School CS & Game Development Teacher",
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
