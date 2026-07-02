import type { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce storefront with cart, checkout, and an admin dashboard for inventory management.",
    image: "/projects/ecommerce.jpg",
    features: [
      "Real-time cart sync across devices",
      "Stripe-powered checkout flow",
      "Admin dashboard with sales analytics",
    ],
    techStack: ["React", "Next.js", "Tailwind", "TypeScript", "Spring Boot"],
    githubUrl: "https://github.com/your-username/ecommerce-platform",
    liveUrl: "https://your-demo-link.com",
  },
  {
    id: "proj-2",
    title: "Task Management App",
    description:
      "A collaborative task board with drag-and-drop workflows, real-time updates, and team permissions.",
    image: "/projects/taskapp.jpg",
    features: [
      "Drag-and-drop kanban board",
      "Real-time collaboration",
      "Role-based access control",
    ],
    techStack: ["React", "TypeScript", "Node", "MongoDB"],
    githubUrl: "https://github.com/your-username/task-manager",
    liveUrl: "https://your-demo-link.com",
  },
  {
    id: "proj-3",
    title: "Developer Portfolio Engine",
    description:
      "A themeable portfolio template with animated sections, dark mode, and a content layer driven by JSON data.",
    image: "/projects/portfolio.jpg",
    features: [
      "Fully animated section transitions",
      "Config-driven content",
      "Lighthouse score of 95+",
    ],
    techStack: ["React", "TypeScript", "Tailwind", "Java"],
    githubUrl: "https://github.com/your-username/portfolio-engine",
  },
];
