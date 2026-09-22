import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import TeacherProfile from "@/components/sections/TeacherProfile";
import ClassesSection from "@/components/sections/ClassesSection";
import BreathingCore from "@/components/sections/BreathingCore";
import ConditionsSection from "@/components/sections/ConditionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBand from "@/components/sections/CtaBand";
import { marqueeItems, site } from "@/lib/site";
import { team } from "@/lib/content/team";

export const metadata = {
  title: "About Us",
  description:
    "Meet Yogacharya Manish and Yogini Pooja, the philosophy behind Yogic Company, our classes, our breathwork practice and the wellness areas we work with.",
  alternates: { canonical: "/aboutus" },
  openGraph: {
    title: "About Yogic Company",
    description:
      "The profound interconnectedness of mind, body, and breath reveals the body's inherent capacity for healing and balance.",
    images: [{ url: "/images/team/partners-namaste.jpg" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb={[{ label: "About Us" }]} />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-6" animation="fade-right">
              <div className="yc-shape-arch">
                <Image
                  src="/images/about/about-hero.jpg"
                  alt="Soft abstract portrait in warm light, the About Yogic Company motif"
                  width={1400}
                  height={1000}
                  sizes="(max-width: 991px) 92vw, 46vw"
                  priority
                  style={{ width: "100%", height: "clamp(320px, 42vw, 480px)", objectFit: "cover" }}
                />
              </div>
            </Reveal>

            <Reveal className="col-lg-6" animation="fade-left">
              <SectionHeading
                eyebrow="About Yogic Company"
                title="If you're experiencing challenges with stress, energy levels, or overall well-being, we can help"
                text="We can help you cultivate greater peace, vitality, and a more fulfilling life."
              />
              <p className="mt-3">
                At Yogic Company we bring ancient Indian breathing techniques and
                mindful postures to the forefront, inspiring a journey of true
                rejuvenation. Our mission is to guide you toward balance,
                connection, and a renewed sense of vitality through holistic
                wellness practices.
              </p>
              <p>
                We teach from {site.locality}, in the Himalayan foothills, and work
                with people across India and abroad — in group classes, one to one,
                and inside workplaces.
              </p>
              <div className="mt-4 d-flex flex-wrap gap-3">
                <Button href="/programs">Our Programmes</Button>
                <Button href="/we-deal-with" variant="outline">
                  What We Deal With
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream" id="philosophy">
        <div className="yc-container">
          <div className="row g-0 align-items-stretch yc-shape-soft" style={{ overflow: "hidden" }}>
            <Reveal className="col-lg-6" animation="fade-right">
              <Image
                src="/images/about/philosophy-field.jpg"
                alt="A lone figure standing in a vast field of sunflowers under an open sky"
                width={1400}
                height={900}
                sizes="(max-width: 991px) 100vw, 50vw"
                style={{ width: "100%", height: "100%", minHeight: "320px", objectFit: "cover" }}
              />
            </Reveal>
            <Reveal
              className="col-lg-6 d-flex align-items-center yc-bg-primary"
              animation="fade-left"
              style={{ padding: "clamp(2rem, 5vw, 4rem)" }}
            >
              <div>
                <span className="yc-eyebrow">Our Philosophy</span>
                <blockquote className="mb-0">
                  <p
                    style={{
                      fontFamily: "var(--yc-font-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                      lineHeight: 1.25,
                      color: "#fff",
                      marginBottom: "1rem",
                    }}
                  >
                    The profound interconnectedness of mind, body, and breath
                    reveals the body&rsquo;s inherent capacity for healing and
                    balance.
                  </p>
                  <cite
                    style={{
                      fontStyle: "normal",
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--yc-tint)",
                    }}
                  >
                    About Yogic Company
                  </cite>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream-light" id="partners">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="We Are Your Partners"
              title="The teachers who will guide your practice"
              align="center"
            />
          </Reveal>

          {/* <Reveal className="mt-5 yc-shape-soft">
            <Image
              src="/images/team/manish-and-pooja.jpg"
              alt="Yogacharya Manish and Yogini Pooja seated together in a light-filled practice space"
              width={1400}
              height={800}
              sizes="(max-width: 1290px) 92vw, 1290px"
              style={{ width: "100%", height: "clamp(260px, 40vw, 480px)", objectFit: "cover" }}
            />
          </Reveal> */}

          <div className="mt-5 pt-4">
            <TeacherProfile member={team[0]} />
          </div>

          <div className="mt-5 pt-5">
            <TeacherProfile member={team[1]} flip />
          </div>

          <Reveal className="text-center mt-5">
            <Button href="/consultation">Book a consultation with Yogacharya Manish</Button>
          </Reveal>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <ClassesSection />
      <BreathingCore />
      <ConditionsSection />
      <TestimonialsSection />

      <CtaBand
        title="Rediscover wellness, one breath at a time"
        text="Tell us what you would like to work on and we will suggest a class, programme or one-to-one session that fits."
        primary={{ label: "Start an enquiry", href: "/enquiry/general" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
