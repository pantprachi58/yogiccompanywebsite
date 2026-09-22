import SectionHeading from "@/components/ui/SectionHeading";
import ConditionCard from "@/components/ui/ConditionCard";
import Reveal from "@/components/ui/Reveal";
import { conditions } from "@/lib/content/conditions";

export default function ConditionsSection({
  eyebrow = "Overcome Stress, Pain, and Health Challenges",
  title = "We Deal With",
  text = "Our expertly crafted practices address stress, anxiety, mental wellness, chronic conditions, back pain, and infertility, guiding you toward lasting health and balance. Discover holistic solutions designed for profound, sustainable transformation.",
  background = "yc-bg-cream",
}) {
  return (
    <section className={`yc-section ${background}`} id="we-deal-with">
      <div className="yc-container">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} text={text} align="center" />
        </Reveal>
        <div className="row g-4 mt-4">
          {conditions.map((condition, i) => (
            <Reveal className="col-md-6 col-xl-4" key={condition.slug} delay={(i % 3) * 100}>
              <ConditionCard condition={condition} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
