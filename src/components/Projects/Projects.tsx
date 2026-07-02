import SectionTitle from "@/components/Common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-16 scroll-mt-32">
      <SectionTitle
        eyebrow="Selected Work"
        title="Projects"
        description="A few things I've built end-to-end, from architecture to polish."
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
