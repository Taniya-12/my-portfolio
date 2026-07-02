import SectionTitle from "@/components/Common/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-16 scroll-mt-32">
      <SectionTitle
        eyebrow="Journey"
        title="Experience"
        description="Where I've applied what I've learned in real products."
      />
      <div className="flex flex-col gap-6">
        {experienceData.map((item, i) => (
          <ExperienceCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
