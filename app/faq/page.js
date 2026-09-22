import PageHeader from "@/components/ui/PageHeader";
import FaqAccordion from "@/components/sections/FaqAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { faqs } from "@/lib/content/faq";
import { consultationFaqs } from "@/lib/content/conditions";

export const metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Yogic Company classes, flagship programmes, workplace workshops, consultations and how to begin practising.",
  alternates: { canonical: "/faq" },
};

const allFaqs = [...consultationFaqs, ...faqs];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHeader title="FAQ" breadcrumb={[{ label: "FAQ" }]} />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5">
            <Reveal className="col-lg-4">
              <SectionHeading
                eyebrow="Good questions"
                title="Quick answers for your practice"
                text="If yours is not here, write to us — we would rather answer it properly than leave you guessing."
              />
            </Reveal>
            <Reveal className="col-lg-8" delay={100}>
              <FaqAccordion items={allFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Still deciding?"
        text="A short conversation usually settles it faster than a page of answers."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Book a consultation", href: "/consultation" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
