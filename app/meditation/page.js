import PageHeader from "@/components/ui/PageHeader";
import ArticleIndex from "@/components/sections/ArticleIndex";
import CtaBand from "@/components/sections/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { meditationArticles } from "@/lib/content/meditation";

export const metadata = {
  title: "The Art of Stillness — Meditation Content Series",
  description:
    "A series dedicated to guiding individuals through different meditation forms, helping them cultivate mindfulness, reduce stress, and achieve a balanced mind.",
  alternates: { canonical: "/meditation" },
};

export default function MeditationPage() {
  return (
    <>
      <PageHeader
        title="Meditation Practices"
        breadcrumb={[{ label: "Meditation" }]}
        intro="The Art of Stillness — a journey through meditation practices for a calmer, more focused mind."
      />

      <section className="yc-section--tight yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Content series"
              title="The Art of Stillness"
              text="A series dedicated to guiding individuals through different meditation forms, helping them cultivate mindfulness, reduce stress, and achieve a balanced mind."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <ArticleIndex items={meditationArticles} basePath="/meditation" />

      <CtaBand
        title="Practise what you read"
        text="Every method in this series is one we teach. Ask us where to start."
        primary={{ label: "Start an enquiry", href: "/enquiry/general" }}
        secondary={{ label: "Access to Stillness", href: "/access-to-stillness" }}
      />
    </>
  );
}
