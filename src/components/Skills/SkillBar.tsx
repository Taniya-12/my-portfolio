import { motion } from "framer-motion";
import type { SkillItem } from "@/types";

interface SkillBarProps {
  skill: SkillItem;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-white font-medium group-hover:text-accent transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-secondary">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft group-hover:shadow-[0_0_10px_rgba(255,107,0,0.6)]"
        />
      </div>
    </motion.div>
  );
}
