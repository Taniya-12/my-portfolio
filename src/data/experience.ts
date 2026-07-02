import type { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Your Company Name",
    role: "Frontend Developer Intern",
    duration: "Jan 2026 — Present",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Built and shipped reusable UI components used across multiple product surfaces",
      "Improved page load performance through code splitting and lazy loading",
      "Collaborated with design to translate Figma files into pixel-accurate, responsive interfaces",
    ],
  },
  {
    id: "exp-2",
    company: "Freelance",
    role: "Web Developer",
    duration: "2024 — 2025",
    techStack: ["React", "Node.js", "MongoDB"],
    achievements: [
      "Delivered full-stack web applications for small business clients",
      "Set up CI/CD pipelines and deployment workflows",
    ],
  },
];
