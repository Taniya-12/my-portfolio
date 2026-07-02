import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Home, GraduationCap, Briefcase, Rocket, Zap, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";
import type { SectionId } from "@/types";

const ICONS: Record<string, React.ReactNode> = {
  home: <Home size={16} />,
  graduation: <GraduationCap size={16} />,
  briefcase: <Briefcase size={16} />,
  rocket: <Rocket size={16} />,
  zap: <Zap size={16} />,
  phone: <Phone size={16} />,
};

interface TopNavProps {
  activeSection: SectionId;
}

export default function TopNav({ activeSection }: TopNavProps) {
  return (
    <nav
      className="sticky top-5 z-50 mx-auto mb-8 flex w-fit max-w-full items-center gap-1 rounded-full border border-border bg-surface/70 backdrop-blur-xl px-2 py-2 shadow-lg shadow-black/40 overflow-x-auto"
      aria-label="Section navigation"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Link
            key={item.id}
            to={item.id}
            spy={false}
            smooth={true}
            duration={600}
            offset={-110}
            className="relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium cursor-pointer select-none whitespace-nowrap outline-none"
          >
            {isActive && (
              <motion.span
                layoutId="active-nav-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 flex items-center gap-1.5 ${
                isActive ? "text-white" : "text-secondary hover:text-white"
              } transition-colors`}
            >
              {ICONS[item.icon]}
              <span className="hidden sm:inline">{item.label}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
