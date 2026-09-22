import SectionHeading from "@/components/ui/SectionHeading";
import ClassTabs from "@/components/sections/ClassTabs";
import Reveal from "@/components/ui/Reveal";

export default function ClassesSection() {
  return (
    <section className="yc-section yc-bg-cream-light">
      <div className="yc-container">
        <Reveal>
          <SectionHeading
            eyebrow="Join our classes"
            title="Find the format that fits your practice"
            text="Practise in a group, one to one, or bring the practice into your workplace."
            align="center"
          />
        </Reveal>
        <Reveal className="mt-5" delay={80}>
          <ClassTabs />
        </Reveal>
      </div>
    </section>
  );
}
