import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Glyph from "@/components/ui/Glyph";
import TeacherProfile from "@/components/sections/TeacherProfile";
import ClassTabs from "@/components/sections/ClassTabs";
import ConditionsSection from "@/components/sections/ConditionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBand from "@/components/sections/CtaBand";
import { struggles, remoteApproach } from "@/lib/content/conditions";
import { team } from "@/lib/content/team";

export const metadata = {
  title: "Remote Healing — Yoga & Breathwork from Home",
  description:
    "Heal naturally from stress, PCOD, infertility and chronic pain with yoga and breathwork, guided live over video from the comfort of your home.",
  alternates: { canonical: "/healing" },
  openGraph: {
    title: "Remote Healing | Yogic Company",
    images: [{ url: "/images/hero/open-landscape.jpg" }],
  },
};

export default function HealingPage() {
  return (
    <>
      <PageHeader
        title="Heal Naturally, from Anywhere"
        breadcrumb={[{ label: "Remote Healing" }]}
        intro="Heal naturally from stress, PCOD, infertility, and chronic pain with yoga & breathwork."
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-6" animation="fade-right">
              <div className="yc-shape-arch">
                <Image
                  src="/images/team/partners-namaste.jpg"
                  alt="Yogacharya Manish and Yogini Pooja standing in namaste"
                  width={1080}
                  height={1920}
                  sizes="(max-width: 991px) 92vw, 46vw"
                  priority
                  style={{ width: "100%", height: "clamp(320px, 44vw, 500px)", objectFit: "cover" }}
                />
              </div>
            </Reveal>
            <Reveal className="col-lg-6" animation="fade-left">
              <SectionHeading
                eyebrow="Remote healing"
                title="Restore balance and vitality, guided live over video"
                text="From obesity and anxiety to diabetes and joint pain — thousands, including top corporate leaders and celebrities, trust Yogic Company to restore balance and vitality."
              />
              <p className="mt-3">
                You don&rsquo;t have to live with these challenges. With the right
                guidance, your body already knows how to heal.
              </p>
              <div className="mt-4">
                <Button href="/enquiry/general">Start your healing journey</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Sound familiar?"
              title="Do You Struggle With Any of These?"
              align="center"
            />
          </Reveal>
          <div className="yc-tilegrid mt-5">
            {struggles.map((s, i) => (
              <Reveal key={s} delay={(i % 4) * 70}>
                <div className="yc-tile">
                  <span className="yc-tile__icon">
                    <FiCheck aria-hidden="true" />
                  </span>
                  <p className="yc-tile__text mb-0">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-primary">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Remote Healing Approach"
              title="Transform your health from the comfort of your home"
              text="Live guidance over video, so the practice fits your day rather than the other way round."
              align="center"
            />
          </Reveal>
          <div className="row g-4 mt-4">
            {remoteApproach.map((item, i) => (
              <Reveal className="col-md-4" key={item.title} delay={i * 100}>
                <div className="yc-tile flex-column text-center h-100" style={{ alignItems: "center" }}>
                  <span className="yc-tile__icon" style={{ width: 56, height: 56 }}>
                    <Glyph name={item.icon} size={28} />
                  </span>
                  <span className="yc-tile__title d-block mt-2">{item.title}</span>
                  <p className="yc-tile__text mb-0">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-5">
            <Button href="/enquiry/general" variant="light">
              Start my healing journey today
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Yogic Company"
              title="Together, they've transformed thousands of lives across the globe"
              align="center"
            />
          </Reveal>
          <div className="mt-5">
            <TeacherProfile member={team[0]} />
          </div>
          <div className="mt-5 pt-5">
            <TeacherProfile member={team[1]} flip />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="From energising group sessions to personalised guidance"
              text="Our remote classes bring holistic healing to every journey."
              align="center"
            />
          </Reveal>
          <Reveal className="mt-5">
            <ClassTabs />
          </Reveal>
        </div>
      </section>

      <ConditionsSection
        eyebrow="Choose Your Path to Healing"
        title="Where we can help"
        background="yc-bg-cream"
      />

      <CtaBand
        title="Your healing starts with a single breath."
        text="Thousands have already reclaimed peace, vitality, and balance. Now it's your turn."
        primary={{ label: "Start my healing journey", href: "/enquiry/general" }}
        secondary={{ label: "Book a consultation", href: "/consultation" }}
      />
    </>
  );
}
