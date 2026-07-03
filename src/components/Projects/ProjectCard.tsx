import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
      style={{ transformPerspective: 1000 }}
      className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition-colors"
    >
      <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(255,107,0,0.35),transparent_40%)]" />

      {/* <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div> */}

      <div className="relative p-6">
        <h3 className="font-heading font-semibold text-xl text-white">
          {project.title}
        </h3>
        <p className="text-secondary text-sm mt-2 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="text-xs text-secondary flex gap-2">
              <span className="text-accent">✓</span> {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* <div className="flex items-center gap-3 mt-5">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-sm text-white border border-border px-3.5 py-2 rounded-lg hover:border-accent/50 transition-colors"
          >
            <Github size={15} /> Code
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm text-white bg-accent px-3.5 py-2 rounded-lg"
            >
              <ExternalLink size={15} /> Live Demo
            </motion.a>
          )}
        </div> */}
      </div>
    </motion.div>
  );
}
