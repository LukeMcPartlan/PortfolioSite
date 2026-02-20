# replit.md

## Overview

This is a personal portfolio website for Luke McPartlan-Alvarez, a Computer Science educator, developer, and game designer. The site showcases work across four main categories: Game Development, Computer Science, Education, and Esports. It is essentially a **static frontend site** — all portfolio data (projects, experiences, achievements) is hardcoded in React hooks rather than fetched from a backend API. The Express server exists only to serve the built frontend files and provide Vite HMR during development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router, not React Router)
- **State/Data**: TanStack React Query wrapping hardcoded data in custom hooks (`client/src/hooks/use-portfolio-data.ts`). No actual API calls are made — data is returned directly from hooks to maintain the architecture pattern in case a real backend is added later.
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives, styled with Tailwind CSS and CSS variables for theming
- **Animations**: Framer Motion for page transitions and card animations
- **Icons**: Lucide React (primary icon library)
- **Styling**: Tailwind CSS with a custom dark theme using CSS variables defined in `client/src/index.css`. Fonts include Space Grotesk (display/headings) and Inter (body).
- **Build Tool**: Vite with React plugin

### Backend
- **Runtime**: Express 5 on Node.js with TypeScript (via tsx)
- **Purpose**: Serves the static frontend only. The `server/routes.ts` file explicitly registers no API routes.
- **Storage**: A `MemStorage` class exists in `server/storage.ts` with basic user CRUD (unused scaffolding). Uses `randomUUID` for IDs.
- **Development**: Vite dev server is integrated as Express middleware for HMR during development (`server/vite.ts`)
- **Production Build**: Vite builds the client to `dist/public`, esbuild bundles the server to `dist/index.cjs`

### Database
- **Schema**: Drizzle ORM is configured with PostgreSQL (`drizzle.config.ts`) but the actual app doesn't use a database. The `shared/schema.ts` file defines Zod schemas (not Drizzle table definitions) for frontend type safety only.
- **Migrations**: Would go to `./migrations` directory via `drizzle-kit push`
- **Note**: If database features are needed later, use PostgreSQL with Drizzle ORM. The `DATABASE_URL` environment variable is expected by drizzle config.

### Key Pages/Routes
- `/` — Home page with hero section and category navigation
- `/game-design` — Game development projects (featured: Axonauts)
- `/computer-science` — CS projects (featured: BazaarGen)
- `/education` — Teaching experience and credentials
- `/esports` — Competitive gaming achievements and coaching
- `/student-portfolios` — Showcase of student work
- `/project/:id` — Individual project detail pages with media embeds (YouTube, Unity Play)

### Project Structure
```
client/           → Frontend React app
  src/
    components/   → Reusable components (layout-shell, project-card, experience-card)
    components/ui/→ shadcn/ui component library
    hooks/        → Custom hooks (use-portfolio-data, use-mobile, use-toast)
    pages/        → Route page components
    lib/          → Utilities (queryClient, cn helper)
server/           → Express backend
  index.ts        → Server entry point
  routes.ts       → API routes (empty — no backend needed)
  static.ts       → Static file serving for production
  vite.ts         → Vite dev server integration
  storage.ts      → In-memory storage (scaffolding)
shared/           → Shared types and schemas
  schema.ts       → Zod schemas for Project and Experience types
  routes.ts       → URL builder utility (minimal)
attached_assets/  → Images and text files referenced by the portfolio
```

### Build & Run
- `npm run dev` — Development with Vite HMR
- `npm run build` — Production build (Vite for client, esbuild for server)
- `npm start` — Run production build
- `npm run db:push` — Push Drizzle schema to database (not actively used)

## External Dependencies

### Core Libraries
- **React 18** + **TypeScript** — UI framework
- **Vite** — Build tool and dev server
- **Express 5** — HTTP server
- **Wouter** — Client-side routing
- **TanStack React Query** — Data fetching/caching pattern (used with static data)
- **Framer Motion** — Animations

### UI Framework
- **shadcn/ui** (new-york style) — Component library built on Radix UI primitives
- **Tailwind CSS** — Utility-first CSS framework
- **Lucide React** — Icon library
- **class-variance-authority** + **clsx** + **tailwind-merge** — Styling utilities

### Database (configured but not actively used)
- **Drizzle ORM** — TypeScript ORM for PostgreSQL
- **drizzle-zod** — Zod schema generation from Drizzle schemas
- **PostgreSQL** — Database (requires `DATABASE_URL` env var)
- **connect-pg-simple** — Session store (available but unused)

### Replit-specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)

### Validation
- **Zod** — Schema validation for TypeScript types