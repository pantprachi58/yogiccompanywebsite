import PageHeader from "@/components/ui/PageHeader";
import ConditionsSection from "@/components/sections/ConditionsSection";
import BreathingCore from "@/components/sections/BreathingCore";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "We Deal With — Stress, Back Pain, Infertility, Mental Health & Chronic Disease",
  description:
    "Our expertly crafted practices address stress, anxiety, mental wellness, chronic conditions, back pain and infertility, guiding you toward lasting health and balance.",
  alternates: { canonical: "/we-deal-with" },
};

export default function WeDealWithPage() {
  return (
    <>
      <PageHeader
        title="We Deal With"
        breadcrumb={[{ label: "We Deal With" }]}
        intro="Overcome stress, pain and health challenges with holistic solutions designed for profound, sustainable transformation."
      />
      <ConditionsSection
        eyebrow="Wellness areas"
        title="Where our practice helps most"
        background="yc-bg-cream-light"
      />
      <BreathingCore />
      <TestimonialsSection />
      <CtaBand
        title="Tell us what you are carrying"
        text="Each area has its own short questionnaire so we understand your situation before we reply."
        primary={{ label: "Start an enquiry", href: "/enquiry/general" }}
        secondary={{ label: "Book a consultation", href: "/consultation" }}
      />
    </>
  );
}
