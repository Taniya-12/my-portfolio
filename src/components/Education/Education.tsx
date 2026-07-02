import SectionTitle from "@/components/Common/SectionTitle";
import EducationCard from "./EducationCard";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="min-h-screen flex flex-col justify-center py-16 scroll-mt-32">
      <SectionTitle
        eyebrow="Background"
        title="Education"
        description="Academic foundation that shapes how I approach problems."
      />
      <div className="flex flex-col gap-8">
        {educationData.map((item, i) => (
          <EducationCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
