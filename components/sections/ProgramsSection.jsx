import SectionHeading from "@/components/ui/SectionHeading";
import ProgramCard from "@/components/ui/ProgramCard";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/lib/content/programs";

export default function ProgramsSection({
  eyebrow = "Choose your program",
  title = "Flagship programmes, guided end to end",
  text = "Three structured paths through breath, posture and rest — each one taught live and adapted to the person in front of us.",
  background = "yc-bg-cream",
}) {
  return (
    <section className={`yc-section ${background}`}>
      <div className="yc-container">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} text={text} align="center" />
        </Reveal>
        <div className="row g-4 mt-4">
          {programs.map((program, i) => (
            <Reveal className="col-md-6 col-xl-4" key={program.slug} delay={i * 110}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
