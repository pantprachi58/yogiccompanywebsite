import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import CaseStudyBand from "@/components/sections/CaseStudyBand";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ClassesSection from "@/components/sections/ClassesSection";
import ConditionsSection from "@/components/sections/ConditionsSection";
import SeriesSection from "@/components/sections/SeriesSection";
import JournalPreview from "@/components/sections/JournalPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBand from "@/components/sections/CtaBand";
import Marquee from "@/components/ui/Marquee";
import SutraQuote from "@/components/sections/SutraQuote";
import { marqueeItems } from "@/lib/site";

export const metadata = {
  title: "Yogic Company — Breathing, Postures, Rejuvenation",
  description:
    "Yogic Company teaches ancient Indian breathing techniques and mindful postures — flagship programmes, group classes, personal sessions and workplace wellness workshops, led by Yogacharya Manish and Yogini Pooja.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <CaseStudyBand />
      <ProgramsSection />

      <section className="yc-section--tight yc-bg-cream-light">
        <div className="yc-container">
          <SutraQuote
            sutra={{
              sanskrit: "अभ्यासवैराग्याभ्यां तन्निरोधः",
              translation:
                "The mind's fluctuations are restrained through practice and detachment",
              source: "Patanjali Yoga Sutra",
            }}
          />
        </div>
      </section>

      <Marquee items={marqueeItems} />
      <ClassesSection />
      <ConditionsSection />
      <SeriesSection />
      <JournalPreview />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
