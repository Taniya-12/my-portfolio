import SectionTitle from "@/components/Common/SectionTitle";
import SkillCategoryCard from "./SkillCategoryCard";
import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-16 scroll-mt-32">
      <SectionTitle
        eyebrow="Toolbox"
        title="Skills"
        description="Technologies I use to turn ideas into working products."
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {skillsData.map((category, i) => (
          <SkillCategoryCard key={category.id} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}
