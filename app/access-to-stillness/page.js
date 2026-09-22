import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import QuizForm from "@/components/forms/QuizForm";
import { stillnessForm } from "@/lib/content/forms";

export const metadata = {
  title: "Access to Stillness — Let us Talk",
  description:
    "A few quiet questions before we welcome you. Tell us which aspects of breathwork, meditation and yogic practice interest you most, and how you would like to experience them.",
  alternates: { canonical: "/access-to-stillness" },
};

export default function AccessToStillnessPage() {
  return (
    <>
      <PageHeader
        title="Let us Talk"
        breadcrumb={[{ label: "Access to Stillness" }]}
        intro="A few quiet questions before we welcome you."
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5 align-items-start">
            <Reveal className="col-lg-5">
              <SectionHeading
                eyebrow="Access to Stillness"
                title="Guided breath, presence, and grounded wellness"
                text="An invitation to experience calm, clarity, and inner steadiness with Yogacharya Manish."
              />
              <div className="yc-shape-soft mt-4">
                <Image
                  src="/images/about/access-to-stillness.jpg"
                  alt="Access to Stillness — an invitation to guided breathwork with Yogacharya Manish"
                  width={1200}
                  height={1500}
                  sizes="(max-width: 991px) 90vw, 38vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Reveal>

            <Reveal className="col-lg-7" delay={100}>
              <QuizForm form={stillnessForm} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
