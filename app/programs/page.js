import PageHeader from "@/components/ui/PageHeader";
import ProgramsSection from "@/components/sections/ProgramsSection";
import CtaBand from "@/components/sections/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Glyph from "@/components/ui/Glyph";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/content/programs";

export const metadata = {
  title: "Our Programs",
  description:
    "Yogic Company's three flagship programmes: Serenity Blueprint for anxiety and stress, Breathe Life for lung vitality, and Revive Your Sleep for rest.",
  alternates: { canonical: "/programs" },
};

const steps = [
  {
    icon: "wave",
    title: "Start with a conversation",
    text: "We ask what you want to work on, what you have tried and what your week actually looks like.",
  },
  {
    icon: "stillness",
    title: "Practise live, guided",
    text: "Live workshops, personalised one-on-one sessions and online modules, adapted to you.",
  },
  {
    icon: "lotus",
    title: "Keep a daily practice",
    text: "Every programme provides materials, trackers and short practices to hold progress between sessions.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        breadcrumb={[{ label: "Programs" }]}
        intro="Structured, immersive programmes built on breathwork, therapeutic yoga and mindfulness — each one taught live and adapted to you."
      />

      <ProgramsSection
        eyebrow="Flagship programmes"
        title="Choose the path that fits what you are carrying"
        text="Anxiety and stress, lung vitality, or sleep. Each programme works the same three levers — breath, body and attention — toward a different outcome."
        background="yc-bg-cream-light"
      />

      <section className="yc-section yc-bg-cream">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="How a programme runs"
              title="Three steps, no mystery"
              align="center"
            />
          </Reveal>
          <div className="row g-4 mt-4">
            {steps.map((step, i) => (
              <Reveal className="col-md-4" key={step.title} delay={i * 100}>
                <div className="yc-card h-100 text-center">
                  <div className="yc-card__body align-items-center">
                    <span style={{ color: "var(--yc-primary)" }}>
                      <Glyph name={step.icon} size={48} />
                    </span>
                    <span className="yc-card__meta">Step {i + 1}</span>
                    <h3 className="yc-card__title">{step.title}</h3>
                    <p className="yc-card__text">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="At a glance"
              title="Programme durations"
              text="Every programme combines live workshops, personalised one-on-one sessions and online modules."
              align="center"
            />
          </Reveal>
          <Reveal className="mt-5">
            <div>
              {programs.map((p) => {
                const duration = p.delivery
                  .flatMap((m) => m.rows)
                  .find((r) => r.label.toLowerCase() === "duration");
                return (
                  <div className="yc-row-item" key={p.slug}>
                    <div>
                      <h3 className="yc-row-item__title">{p.name}</h3>
                      <span className="yc-row-item__tag">{p.tagline}</span>
                    </div>
                    <p className="mb-0">{duration ? duration.items[0] : "By arrangement"}</p>
                    <p className="mb-0 yc-text-muted-sm">
                      {p.curriculum.length} modules
                    </p>
                    <Button href={`/programs/${p.slug}`} variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which programme fits?"
        text="Answer a few questions and we will point you to the right starting place — or tell you honestly if a class suits you better."
        primary={{ label: "Start an enquiry", href: "/enquiry/general" }}
        secondary={{ label: "See our classes", href: "/classes" }}
      />
    </>
  );
}
