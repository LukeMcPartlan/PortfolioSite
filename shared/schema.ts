import { z } from "zod";

// We define our data types here for the frontend to use.
// Since there is no backend, these are just for frontend type safety.

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.enum(["Game Design", "Computer Science", "Education", "Esports"]),
  link: z.string().optional(),
  demoLink: z.string().optional(),
  githubLink: z.string().optional(),
  imagePlaceholder: z.string().optional(),
});

export type Project = z.infer<typeof projectSchema>;

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  date: z.string(),
  description: z.array(z.string()),
  category: z.enum(["Education", "Esports", "Other"]),
  imagePlaceholder: z.string().optional(),
});

export type Experience = z.infer<typeof experienceSchema>;
