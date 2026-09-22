import PageHeader from "@/components/ui/PageHeader";
import ArticleIndex from "@/components/sections/ArticleIndex";
import CtaBand from "@/components/sections/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SutraQuote from "@/components/sections/SutraQuote";
import { sutraChapters } from "@/lib/content/sutras";

export const metadata = {
  title: "Wisdom of the Sutras — Patanjali's Yoga Sutras",
  description:
    "A content series that delves into the profound teachings of Patanjali's Yoga Sutras, offering practical insights to enhance your spiritual and mental well-being.",
  alternates: { canonical: "/sutras" },
};

export default function SutrasPage() {
  return (
    <>
      <PageHeader
        title="Patanjali's Yoga Sutras"
        breadcrumb={[{ label: "Sutras" }]}
        intro="Wisdom of the Sutras — unlocking the secrets of Patanjali's yoga philosophy."
      />

      <section className="yc-section--tight yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Content series"
              title="Wisdom of the Sutras"
              text="A content series that delves into the profound teachings of Patanjali's Yoga Sutras, offering practical insights to enhance your spiritual and mental well-being. Each sutra is given in the original Sanskrit with a transliteration, a plain-language meaning, a real-life example and an exercise to try."
              align="center"
            />
          </Reveal>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <SutraQuote
                sutra={{
                  sanskrit: "योगश्चित्तवृत्तिनिरोधः",
                  translation: "Yoga is the cessation of the fluctuations of the mind",
                  source: "Patanjali Yoga Sutra 1.2",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <ArticleIndex items={sutraChapters} basePath="/sutras" background="yc-bg-cream" />

      <CtaBand
        title="Philosophy you can practise"
        text="Bring a sutra into a session and we will work with it on the mat, not just on the page."
        primary={{ label: "Book a session", href: "/book" }}
        secondary={{ label: "Read the blogs", href: "/blogs" }}
      />
    </>
  );
}
