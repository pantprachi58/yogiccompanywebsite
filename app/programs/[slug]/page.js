import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SutraQuote from "@/components/sections/SutraQuote";
import CtaBand from "@/components/sections/CtaBand";
import { programs, getProgram } from "@/lib/content/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: program.headline,
    description: program.objective.slice(0, 180),
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      title: `${program.headline} | Yogic Company`,
      description: program.objective.slice(0, 180),
      images: [{ url: program.image }],
    },
  };
}

function Module({ module: mod }) {
  return (
    <Reveal as="section" className="yc-module">
      <h2 className="yc-module__title">{mod.title}</h2>
      {mod.rows.map((row) => (
        <div className="yc-module__row" key={row.label}>
          <h3 className="yc-module__label">{row.label}</h3>
          {row.items.length === 1 ? (
            <p className="mb-0">{row.items[0]}</p>
          ) : (
            <ul className="yc-module__list">
              {row.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </Reveal>
  );
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <PageHeader
        title={program.name}
        breadcrumb={[{ label: "Programs", href: "/programs" }, { label: program.name }]}
        intro={program.headline}
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-6" animation="fade-right">
              <div className="yc-shape-arch">
                <Image
                  src={program.image}
                  alt={`${program.name} — ${program.tagline}`}
                  width={1400}
                  height={900}
                  sizes="(max-width: 991px) 92vw, 46vw"
                  priority
                  style={{ width: "100%", height: "clamp(340px, 46vw, 520px)", objectFit: "cover" }}
                />
              </div>
            </Reveal>

            <Reveal className="col-lg-6" animation="fade-left">
              <SectionHeading
                eyebrow="Objective"
                title={program.tagline}
                text={program.objective}
              />
              <div className="mt-4 d-flex flex-wrap gap-3">
                <Button href="/enquiry/general">Enquire about this programme</Button>
                <Button href="/contact" variant="outline">
                  Talk to a teacher
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream">
        <div className="yc-container">
          <div className="row g-5">
            <div className="col-lg-8">
              <Reveal>
                <SectionHeading eyebrow="What the programme covers" title="Programme curriculum" />
              </Reveal>
              {program.curriculum.map((mod) => (
                <Module module={mod} key={mod.title} />
              ))}
            </div>

            <div className="col-lg-4">
              <div className="yc-toc">
                <SutraQuote sutra={program.sutra} />
                <div className="mt-5">
                  <h2 style={{ fontSize: "1.3rem" }}>Other programmes</h2>
                  <ul className="yc-footer__list" style={{ color: "var(--yc-text)" }}>
                    {others.map((o) => (
                      <li key={o.slug}>
                        <Link className="yc-textlink" href={`/programs/${o.slug}`}>
                          {o.name} <FiArrowRight aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link className="yc-textlink" href="/whitepaper">
                        Read the white paper <FiArrowRight aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-primary">
        <div className="yc-container">
          <div className="row g-5">
            {program.delivery.map((mod) => (
              <Reveal className="col-lg-7" key={mod.title}>
                <span className="yc-eyebrow">Delivery</span>
                <h2>{mod.title}</h2>
                {mod.rows.map((row) => (
                  <div className="yc-module__row mt-4" key={row.label}>
                    <h3 className="yc-module__label" style={{ color: "#fff" }}>
                      {row.label}
                    </h3>
                    {row.items.length === 1 ? (
                      <p className="mb-0">{row.items[0]}</p>
                    ) : (
                      <ul className="yc-module__list">
                        {row.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </Reveal>
            ))}

            <Reveal className="col-lg-5" delay={100}>
              <span className="yc-eyebrow">Expected outcomes</span>
              <h2>What you can expect</h2>
              <ul className="yc-featurelist">
                {program.outcomes.map((o) => (
                  <li key={o}>
                    <FiCheck size={18} aria-hidden="true" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to begin ${program.name}?`}
        text="Answer a few questions about where you are starting from and we will come back to you personally."
        primary={{ label: "Start an enquiry", href: "/enquiry/general" }}
        secondary={{ label: "Book a consultation", href: "/consultation" }}
      />
    </>
  );
}
