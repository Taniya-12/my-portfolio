import { motion } from "framer-motion";
import type { EducationItem } from "@/types";

interface EducationCardProps {
  item: EducationItem;
  index: number;
}

export default function EducationCard({ item, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8"
    >
      <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />
      {index !== 0 && (
        <span className="absolute left-[5px] -top-8 w-px h-8 bg-border" />
      )}

      <motion.div
        whileHover={{ scale: 1.02, y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="rounded-xl border border-border bg-surface p-5 hover:shadow-xl hover:shadow-black/30"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-heading font-semibold text-lg text-white">
            {item.degree}
          </h3>
          <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
            {item.duration}
          </span>
        </div>
        <p className="text-secondary text-sm mt-1">{item.field}</p>
        <p className="text-white text-sm mt-2 font-medium">{item.institution}</p>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-xs font-semibold text-accent">{item.cgpa}</span>
        </div>
        {item.description && (
          <p className="text-secondary text-sm mt-3 leading-relaxed">
            {item.description}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
