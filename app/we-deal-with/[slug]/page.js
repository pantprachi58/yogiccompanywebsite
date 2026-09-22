import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import QuizForm from "@/components/forms/QuizForm";
import CtaBand from "@/components/sections/CtaBand";
import { conditions, getCondition } from "@/lib/content/conditions";
import { getForm } from "@/lib/content/forms";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) return {};
  return {
    title: `${condition.title} — Yoga & Breathwork Support`,
    description: condition.description,
    alternates: { canonical: `/we-deal-with/${condition.slug}` },
    openGraph: {
      title: `${condition.title} | Yogic Company`,
      description: condition.description,
      images: [{ url: condition.image }],
    },
  };
}

export default async function ConditionPage({ params }) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();
  const form = getForm(condition.formSlug);
  const others = conditions.filter((c) => c.slug !== condition.slug);

  return (
    <>
      <PageHeader
        title={condition.title}
        breadcrumb={[{ label: "We Deal With", href: "/we-deal-with" }, { label: condition.title }]}
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-6" animation="fade-right">
              <div className="yc-shape-arch">
                <Image
                  src={condition.image}
                  alt={condition.imageAlt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 991px) 92vw, 46vw"
                  priority
                  style={{ width: "100%", height: "clamp(320px, 44vw, 500px)", objectFit: "cover" }}
                />
              </div>
            </Reveal>
            <Reveal className="col-lg-6" animation="fade-left">
              <SectionHeading
                eyebrow="How we help"
                title={condition.title}
                text={condition.description}
              />
              <p className="mt-3">
                Our work here is built on the same three levers we use in every
                programme: regulated breathing, postures chosen for what they do
                rather than how they look, and guided stillness. Practice is adapted
                to your history, and we ask you to keep your own clinician informed.
              </p>
              <ul className="yc-footer__list mt-4" style={{ color: "var(--yc-text)" }}>
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link className="yc-textlink" href={`/we-deal-with/${o.slug}`}>
                      {o.title} <FiArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {form ? (
        <section className="yc-section yc-bg-cream" id="enquiry">
          <div className="yc-container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <Reveal>
                  <QuizForm form={form} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Prefer to talk it through first?"
        text="Book a consultation and we will listen before suggesting anything."
        primary={{ label: "Book a consultation", href: "/consultation" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
