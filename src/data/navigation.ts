import type { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "education", label: "Education", icon: "graduation" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "rocket" },
  { id: "skills", label: "Skills", icon: "zap" },
  { id: "contact", label: "Contact", icon: "phone" },
];

export const socialLinks: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { id: "github", label: "GitHub", href: "https://github.com/your-username" },
  { id: "leetcode", label: "LeetCode", href: "https://leetcode.com/your-username" },
  { id: "gfg", label: "GeeksforGeeks", href: "https://geeksforgeeks.org/user/your-username" },
  { id: "email", label: "Email", href: "mailto:taniya.kumari@example.com" },
];
