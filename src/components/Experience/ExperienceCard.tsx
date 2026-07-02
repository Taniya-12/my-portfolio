import { motion } from "framer-motion";
import type { ExperienceItem } from "@/types";

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-xl border border-border bg-surface p-6 overflow-hidden"
    >
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
        style={{ transformOrigin: "top" }}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
      />

      <div className="pl-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-heading font-semibold text-lg text-white">
            {item.role}
          </h3>
          <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
            {item.duration}
          </span>
        </div>
        <p className="text-secondary text-sm mt-1 font-medium">{item.company}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-white/90 bg-white/5 border border-border px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2">
          {item.achievements.map((point, i) => (
            <li
              key={i}
              className="text-sm text-secondary leading-relaxed flex gap-2"
            >
              <span className="text-accent mt-1.5">▹</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
