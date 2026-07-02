export type SectionId =
  | "home"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  cgpa: string;
  duration: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  techStack: string[];
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: string;
}
