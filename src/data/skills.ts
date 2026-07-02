import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { id: "react", name: "React", level: 90 },
      { id: "next", name: "Next.js", level: 85 },
      { id: "redux", name: "Redux", level: 75 },
      { id: "tailwind", name: "Tailwind CSS", level: 92 },
      { id: "typescript", name: "TypeScript", level: 82 },
      { id: "javascript", name: "JavaScript", level: 90 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { id: "java", name: "Java", level: 75 },
      { id: "springboot", name: "Spring Boot", level: 65 },
      { id: "node", name: "Node.js", level: 70 },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { id: "mysql", name: "MySQL", level: 78 },
      { id: "mongodb", name: "MongoDB", level: 74 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { id: "git", name: "Git", level: 88 },
      { id: "github", name: "GitHub", level: 88 },
      { id: "vscode", name: "VS Code", level: 95 },
      { id: "postman", name: "Postman", level: 80 },
      { id: "figma", name: "Figma", level: 70 },
    ],
  },
];
