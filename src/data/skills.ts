import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { id: "react", name: "React.js", level: 95 },
      { id: "nextjs", name: "Next.js", level: 92 },
      { id: "typescript", name: "TypeScript", level: 90 },
      { id: "javascript", name: "JavaScript (ES6+)", level: 95 },
      { id: "angular", name: "Angular", level: 50 },
      { id: "vite", name: "Vite", level: 88 },
      { id: "redux", name: "Redux Toolkit", level: 85 },
      { id: "zustand", name: "Zustand", level: 80 },
      { id: "tailwind", name: "Tailwind CSS", level: 95 },
      { id: "html", name: "HTML5", level: 98 },
      { id: "css", name: "CSS3", level: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { id: "node", name: "Node.js", level: 82 },
      { id: "express", name: "Express.js", level: 80 },
      { id: "supabase", name: "Supabase", level: 80 },
      { id: "stripe", name: "Stripe API", level: 75 },
      { id: "restapi", name: "REST APIs", level: 90 },
      { id: "java", name: "Java", level: 80 },
      { id: "springboot", name: "Spring Boot", level: 70 },
    ],
  },
  {
    id: "database-cloud",
    title: "Database & Cloud",
    skills: [
      { id: "mongodb", name: "MongoDB", level: 82 },
      { id: "mysql", name: "MySQL", level: 85 },
      { id: "postgresql", name: "PostgreSQL", level: 78 },
      { id: "aws", name: "AWS", level: 75 },
      { id: "vercel", name: "Vercel", level: 90 },
      { id: "netlify", name: "Netlify", level: 88 },
    ],
  },
  {
    id: "tools",
    title: "Developer & AI Tools",
    skills: [
      { id: "git", name: "Git", level: 92 },
      { id: "github", name: "GitHub", level: 92 },
      { id: "vscode", name: "VS Code", level: 98 },
      { id: "postman", name: "Postman", level: 88 },
      { id: "figma", name: "Figma", level: 80 },
      { id: "copilot", name: "GitHub Copilot", level: 95 },
      { id: "chatgpt", name: "ChatGPT", level: 98 },
      { id: "claude", name: "Claude", level: 92 },
      { id: "codex", name: "OpenAI Codex", level: 88 },
      { id: "antigravity", name: "Antigravity", level: 85 },
    ],
  },
];