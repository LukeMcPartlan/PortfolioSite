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
import eduEastRamapoImg from "@assets/edu-east-ramapo.png";
import eduYonkersImg from "@assets/edu-yonkers.png";
import eduSunyImg from "@assets/edu-suny-orange.png";
import eduMiddletownImg from "@assets/edu-middletown.png";
import eduEsportsImg from "@assets/edu-esports-coaching.png";
import eduRoboticsImg from "@assets/edu-robotics-camp.png";
import eduExtendedDayImg from "@assets/edu-extended-day.png";
import gameOverwatchImg from "@assets/556089441_24599654556322531_2529247496892471526_n_1771560118154.png";
import gameRocketLeagueImg from "@assets/game-rocket-league.png";
import gameDbdImg from "@assets/game-dead-by-daylight.png";
import gameWowImg from "@assets/game-wow.png";
import gameHearthstoneImg from "@assets/game-hearthstone.png";
import gameHotsImg from "@assets/game-hots.png";
import gameMultiversusImg from "@assets/image_1771559497804.png";
import gamePokemonUniteImg from "@assets/image_1771559524627.png";
import gameBazaarImg from "@assets/image_1771559369844.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "Game Development" | "Computer Science" | "Education" | "Competitive Gaming";
  tags: string[];
  link?: string;
  demoLink?: string;
  githubLink?: string;
  image?: string;
  extraImages?: { src: string; caption: string }[];
  embedUrl?: string;
  downloadLink?: string;
  projectLinks?: { label: string; url: string }[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  category: "Education" | "Competitive Gaming" | "Other";
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
  },
  {
    id: "east-ramapo",
    title: "East Ramapo School District",
    description: "High School CS & Game Development Teacher. Teaching Unity game design and web development with project-based curriculum.",
    longDescription: "Currently teaching Computer Science and Game Development to high school students at East Ramapo School District.\n\nThe curriculum is entirely project-based, covering Unity game design, Blender 3D modeling, C#, and web development. Students learn industry-standard workflows and build real, playable games from concept to completion. The course emphasizes hands-on development — students ship projects, not just assignments.\n\nCurriculum design covers game mechanics, version control, and collaborative development practices that mirror professional game studios.",
    category: "Education",
    tags: ["Unity", "Blender", "C#", "Web Dev", "Curriculum Design", "High School"],
    image: eduEastRamapoImg,
    projectLinks: [
      { label: "Student Portfolio 1", url: "https://play.unity.com/ru/user/c0aa3e8a-1eb1-444c-a51e-8e1e1d55a767" },
      { label: "Student Portfolio 2", url: "https://play.unity.com/en/user/0cecae5e-dd28-4a4c-ae80-432845069353" },
      { label: "Student Portfolio 3", url: "https://play.unity.com/en/user/7764b99c-f413-454f-a417-7c98c4f7c3fc" },
    ],
  },
  {
    id: "yonkers",
    title: "Yonkers School District",
    description: "Math Teacher (Algebra) — achieved 180% average annual growth per iReady Diagnostic, 80% above district average.",
    longDescription: "Taught 7th, 8th, and 9th grade Algebra sections at Yonkers School District.\n\nAchieved 180% average annual growth per iReady Diagnostic Testing — 80% above the district average. This result reflected a data-driven teaching approach focused on identifying individual student gaps and targeting instruction accordingly.\n\nDeveloped differentiated lesson plans to serve students across multiple grade levels and skill ranges simultaneously, ensuring all learners were challenged at their appropriate level.",
    category: "Education",
    tags: ["Algebra", "iReady", "Data-Driven Instruction", "Middle School"],
    image: eduYonkersImg,
  },
  {
    id: "suny-orange",
    title: "SUNY Orange College",
    description: "Computer Science Adjunct Professor — delivered college-level CS instruction.",
    longDescription: "Served as an Adjunct Professor of Computer Science at SUNY Orange College.\n\nDelivered college-level Computer Science instruction covering foundational programming concepts, data structures, and algorithmic thinking. The experience deepened understanding of the skills students need to thrive in STEM programs and helped bridge the gap between secondary and post-secondary CS education.\n\nThis role provided insight into how students transition from introductory CS coursework to more rigorous college-level expectations.",
    category: "Education",
    tags: ["College", "Computer Science", "Adjunct Professor", "STEM"],
    image: eduSunyImg,
  },
  {
    id: "middletown",
    title: "Middletown City School District",
    description: "Computer Science Teacher — founded the district's first Esports program, designed CS curriculum, and established Robotics Summer Camp.",
    longDescription: "Served as Computer Science Teacher at Middletown City School District from 2020 to 2023, where I built multiple programs from the ground up.\n\nFounded the district's first Esports program, where 90% of players rose from below the 40th percentile to above the 80th percentile globally, with 3 interstate first-place wins. Designed the 7th-8th grade Computer Science curriculum and taught Python programming.\n\nEstablished a Robotics Summer Camp focused on battlebots, giving students hands-on engineering experience. Collaborated on an $83M school renovation project to design Esports and technology facilities for the district.",
    category: "Education",
    tags: ["Python", "Curriculum Design", "Esports", "Robotics", "Middle School"],
    image: eduMiddletownImg,
  },
  {
    id: "esports-coaching",
    title: "Esports Coaching",
    description: "Founded and coached a varsity Esports program — 3 interstate championships, 90% of players rose to top 20% globally.",
    longDescription: "Founded and coached the first Esports program in the Middletown City School District, building a competitive team from scratch.\n\nThe program achieved remarkable results: 90% of players rose from below the 40th percentile to above the 80th percentile in their respective games globally. The team won 3 interstate first-place trophies across varsity and JV divisions in Rocket League.\n\nBeyond competition, the program served as a vehicle for student engagement — many team members were students who struggled academically but found motivation and discipline through competitive gaming. The program demonstrated measurable improvements in attendance and academic performance among participants.",
    category: "Education",
    tags: ["Esports", "Coaching", "Rocket League", "Student Engagement", "Leadership"],
    image: eduEsportsImg,
  },
  {
    id: "robotics-camp",
    title: "Summer Robotics Camp",
    description: "Established a summer battlebots robotics camp giving students hands-on engineering experience.",
    longDescription: "Created and ran a Summer Robotics Camp at Middletown City School District focused on building battlebots.\n\nStudents designed, built, and programmed combat robots from scratch, learning mechanical engineering, basic electronics, and programming in the process. The camp culminated in a tournament where students competed their battlebots against each other.\n\nThe program gave students hands-on experience with real engineering challenges — weight constraints, power management, structural integrity, and strategic design decisions — in an engaging, competition-driven format.",
    category: "Education",
    tags: ["Robotics", "Engineering", "Summer Camp", "Battlebots", "STEM"],
    image: eduRoboticsImg,
  },
  {
    id: "extended-day",
    title: "Extended Day Programs",
    description: "After-school programs providing additional CS instruction and project time for students.",
    longDescription: "Ran Extended Day Programs providing after-school Computer Science instruction and dedicated project time for students.\n\nThese programs extended the school day to give students additional time to work on coding projects, receive one-on-one support, and explore topics beyond the standard curriculum. Students used this time to develop personal projects, prepare for competitions, and deepen their understanding of programming concepts.\n\nThe programs served as a bridge for students who needed extra support as well as those who wanted to push beyond classroom material.",
    category: "Education",
    tags: ["After-School", "CS Education", "Mentoring", "Student Support"],
    image: eduExtendedDayImg,
  },
  {
    id: "overwatch",
    title: "Overwatch",
    description: "Top 500 Americas Region. OWL Season 1 VIP with backstage coaching access.",
    longDescription: "Reached Top 500 in the Americas Region in Overwatch, placing in the highest tier of competitive play.\n\nAlso served as a coaching VIP during Overwatch League Season 1, receiving backstage access and meeting professional players and industry figures. This experience combined high-level competitive play with behind-the-scenes exposure to professional esports operations and team coaching structures.",
    category: "Competitive Gaming",
    tags: ["FPS", "Top 500", "OWL", "Coaching"],
    image: gameOverwatchImg,
  },
  {
    id: "rocket-league",
    title: "Rocket League",
    description: "Coached varsity and JV teams to 3 interstate championship trophies.",
    longDescription: "Coached high school Rocket League teams at the varsity and JV levels, leading both squads to interstate championship victories.\n\nThe varsity team won the Fall Season Championship, and the JV team won the Winter Season Championship. In total, the program earned 3 interstate first-place trophies. Players on the team demonstrated dramatic improvement — 90% rose from below the 40th percentile to above the 80th percentile in competitive rankings globally.\n\nThe Rocket League program was the foundation of the district's esports initiative and served as proof that competitive gaming could drive student engagement and academic improvement.",
    category: "Competitive Gaming",
    tags: ["Coaching", "Championships", "Varsity", "JV"],
    image: gameRocketLeagueImg,
  },
  {
    id: "dead-by-daylight",
    title: "Dead By Daylight",
    description: "Achieved max rank with $200 in tournament earnings.",
    longDescription: "Reached the maximum competitive rank in Dead By Daylight and competed in tournaments, earning $200 in prize money.\n\nDead By Daylight's asymmetric horror gameplay requires strong game sense, map knowledge, and adaptability — skills that translated well into both competitive play and understanding game design from a player's perspective.",
    category: "Competitive Gaming",
    tags: ["Horror", "Max Rank", "Tournaments", "$200 Earnings"],
    image: gameDbdImg,
  },
  {
    id: "world-of-warcraft",
    title: "World of Warcraft",
    description: "Raid Leader of the #1 guild on Garona Server with multiple server-first kills.",
    longDescription: "Served as Raid Leader of the top-ranked guild on Garona Server in World of Warcraft, coordinating 25-player raid teams to achieve multiple server-first boss kills.\n\nRaid leading at this level required managing complex group dynamics, developing and communicating strategies for multi-phase encounters, and maintaining team morale across progression pushes. The leadership and organizational skills developed here directly informed later coaching and teaching work.",
    category: "Competitive Gaming",
    tags: ["MMO", "Raid Leader", "#1 Guild", "Server Firsts"],
    image: gameWowImg,
  },
  {
    id: "hearthstone",
    title: "Hearthstone",
    description: "Peak Rank 1500 in the Americas Region.",
    longDescription: "Achieved a peak competitive rank of 1500 in the Americas Region in Hearthstone, Blizzard's digital card game.\n\nCompetitive Hearthstone requires deep understanding of meta-game analysis, probability, and strategic decision-making under uncertainty — skills that overlap heavily with the analytical thinking taught in CS and math education.",
    category: "Competitive Gaming",
    tags: ["Card Game", "Rank 1500", "Americas", "Strategy"],
    image: gameHearthstoneImg,
  },
  {
    id: "heroes-of-the-storm",
    title: "Heroes of the Storm",
    description: "Top 64 Tespa Nationals. Highest ranked Diablo player in the Americas.",
    longDescription: "Competed in Tespa Nationals for Heroes of the Storm, reaching the Top 64 in the collegiate tournament bracket.\n\nAlso held the distinction of being the highest-ranked Diablo player in the Americas Region, demonstrating deep mastery of a niche character in a team-based MOBA environment. This required both individual mechanical skill and strong team coordination.",
    category: "Competitive Gaming",
    tags: ["MOBA", "Top 64 Nationals", "Tespa", "Americas #1 Diablo"],
    image: gameHotsImg,
  },
  {
    id: "multiversus",
    title: "MultiVersus",
    description: "Top 0.5% globally as Superman (Rank ~7000).",
    longDescription: "Reached the top 0.5 percentile globally in MultiVersus as Superman, ranking approximately 7000th worldwide.\n\nMultiVersus is a platform fighter that demands quick reflexes, matchup knowledge, and adaptability. Competing at this level demonstrated strong mechanical skill in a fast-paced competitive environment.",
    category: "Competitive Gaming",
    tags: ["Platform Fighter", "Top 0.5%", "Superman", "Global Ranking"],
    image: gameMultiversusImg,
  },
  {
    id: "pokemon-unite",
    title: "Pokemon Unite",
    description: "Achieved Master Rank in the inaugural Season 1.",
    longDescription: "Reached Master Rank during the inaugural Season 1 of Pokemon Unite, placing among the top competitive players from the very start of the game's ranked scene.\n\nPokemon Unite is a team-based MOBA requiring strong macro awareness, team coordination, and objective control. Achieving Master Rank in the first season — before established metas and guides existed — required rapid adaptation and deep game sense.",
    category: "Competitive Gaming",
    tags: ["MOBA", "Master Rank", "Season 1", "Pokemon"],
    image: gamePokemonUniteImg,
  },
  {
    id: "the-bazaar",
    title: "The Bazaar",
    description: "Legendary 103 ranked player. Winner of the first-ever officially hosted Bazaar tournament.",
    longDescription: "Achieved Legendary 103 rank in The Bazaar, placing among the top competitive players globally.\n\nWon the first-ever officially hosted Bazaar tournament, marking a milestone in the game's competitive scene. As a Grand Founder, this achievement reflects deep mastery of the game's hero mechanics, economy management, and strategic decision-making from the earliest days of the competitive meta.",
    category: "Competitive Gaming",
    tags: ["Strategy", "Legendary 103", "Tournament Winner", "Grand Founder"],
    image: gameBazaarImg,
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
