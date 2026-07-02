import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import type { SkillCategory } from "@/types";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCategoryCard({
  category,
  index,
}: SkillCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-border bg-surface p-6 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-colors"
    >
      <h3 className="font-heading font-semibold text-lg text-white mb-5">
        {category.title}
      </h3>
      <div className="flex flex-col gap-4">
        {category.skills.map((skill, i) => (
          <SkillBar key={skill.id} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
