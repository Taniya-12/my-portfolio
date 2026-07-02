import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { socialLinks } from "@/data/navigation";

const ICONS: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  leetcode: <SiLeetcode />,
  gfg: <SiGeeksforgeeks />,
  email: <IoMdMail />,
};

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      {socialLinks.map((link) => (
        <motion.a
          key={link.id}
          href={link.href}
          target={link.id === "email" ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={link.label}
          whileHover={{ scale: 1.15, rotate: 8, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-lg text-secondary hover:text-accent hover:border-accent/50 transition-colors"
        >
          {ICONS[link.id]}
        </motion.a>
      ))}
    </div>
  );
}
