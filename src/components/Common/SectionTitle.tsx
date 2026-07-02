import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 text-white">
        {title}
      </h2>
      {description && (
        <p className="text-secondary mt-3 max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
