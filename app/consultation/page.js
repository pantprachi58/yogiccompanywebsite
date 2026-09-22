import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Glyph from "@/components/ui/Glyph";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ReviewGallery from "@/components/sections/ReviewGallery";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import SocialStrip from "@/components/sections/SocialStrip";
import CtaBand from "@/components/sections/CtaBand";
import {
  consultationIssues,
  bodyChanges,
  womensBenefits,
  consultationTakeaways,
  consultationFaqs,
} from "@/lib/content/conditions";
import { team } from "@/lib/content/team";

export const metadata = {
  title: "Book Your Consultancy — Holistic Yoga & Breathing with Yogacharya Manish",
  description:
    "Learn holistic yoga practice and breathing techniques to manage your physical and mental well-being. Book a consultation with Yogacharya Manish for stress, infertility, back pain, diabetes, thyroid and chronic conditions.",
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: "Book Your Consultancy | Yogic Company",
    images: [{ url: "/images/studio/breathing-and-yoga-banner.jpg" }],
  },
};

const ICONS = {
  stress: "spiral",
  fertility: "lotus",
  back: "stillness",
  diabetes: "wave",
  thyroid: "breath",
  energy: "mountain",
  chronic: "wave",
  muscle: "stillness",
  skin: "lotus",
};

const manish = team[0];

export default function ConsultationPage() {
  return (
    <>
      <PageHeader
        title="Book Your Consultancy"
        breadcrumb={[{ label: "Consultation" }]}
        intro="Overcome health-related issues like stress, anxiety, back pain, and infertility."
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-6" animation="fade-right">
              <div className="yc-shape-soft">
                <Image
                  src="/images/studio/breathing-and-yoga-banner.jpg"
                  alt="Believe in the power of breathing and yoga — Yogacharya Manish"
                  width={1400}
                  height={900}
                  sizes="(max-width: 991px) 92vw, 46vw"
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Reveal>
            <Reveal className="col-lg-6" animation="fade-left">
              <SectionHeading
                eyebrow="With Yogacharya Manish"
                title="Learn Holistic Yoga Practice and Breathing Techniques to Manage Your Physical and Mental Well-Being."
                text="Discover science-backed breathing techniques and yoga practices led by Yogacharya Manish."
              />
              <div className="mt-4 d-flex flex-wrap gap-3">
                <Button href="/enquiry/general">Book Your Consultancy</Button>
                <Button href="/aboutus#partners" variant="outline">
                  Meet your teachers
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Where we can help"
              title="Book your call if you are facing these issues"
              align="center"
            />
          </Reveal>
          <div className="yc-tilegrid mt-5">
            {consultationIssues.map((issue, i) => (
              <Reveal key={issue.title} delay={(i % 3) * 80}>
                <div className="yc-tile">
                  <span className="yc-tile__icon">
                    <Glyph name={ICONS[issue.icon] || "lotus"} size={22} />
                  </span>
                  <span>
                    <span className="yc-tile__title d-block">{issue.title}</span>
                    <p className="yc-tile__text">{issue.text}</p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-5">
            <p className="yc-lead mx-auto">
              Want a natural solution? Indulge yourself in the{" "}
              <strong>18+ years</strong> of knowledge &amp; experience of Yogacharya
              Manish.
            </p>
            <Button href="/enquiry/general" className="mt-3">
              Book Your Consultancy
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="In their own words"
              title="People who showed faith in me and my knowledge"
              align="center"
            />
          </Reveal>
          <Reveal className="mt-5">
            <VideoTestimonials />
          </Reveal>
        </div>
      </section>

      <section className="yc-section yc-bg-primary">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="What changes"
              title="Changes you will feel in your body after attending the classes"
              align="center"
            />
          </Reveal>
          <div className="yc-tilegrid mt-5">
            {bodyChanges.map((change, i) => (
              <Reveal key={change} delay={(i % 3) * 70}>
                <div className="yc-tile">
                  <span className="yc-tile__icon">
                    <FiCheck aria-hidden="true" />
                  </span>
                  <p className="yc-tile__text mb-0">{change}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream">
        <div className="yc-container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-5" animation="fade-right">
              <div className="yc-shape-arch">
                <Image
                  src="/images/studio/alternate-nostril-breathing.jpg"
                  alt="A young woman practising alternate nostril breathing"
                  width={1200}
                  height={1400}
                  sizes="(max-width: 991px) 90vw, 38vw"
                  style={{ width: "100%", height: "clamp(320px, 44vw, 500px)", objectFit: "cover" }}
                />
              </div>
              <p className="text-center yc-text-muted-sm mt-3">With Yogini Pooja</p>
            </Reveal>
            <Reveal className="col-lg-7" animation="fade-left">
              <SectionHeading
                eyebrow="For women"
                title="Do you know yoga has some special benefits for a woman"
                text="It helps…"
              />
              <ul className="yc-featurelist mt-4">
                {womensBenefits.map((b) => (
                  <li key={b.strong}>
                    <FiCheck size={18} aria-hidden="true" />
                    <span>
                      {b.lead} <strong>{b.strong}</strong>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Reviews"
              title="People who transformed their lives"
              align="center"
            />
          </Reveal>
          <Reveal className="mt-5">
            <ReviewGallery />
          </Reveal>
        </div>
      </section>

      <section className="yc-section yc-bg-cream">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="On the call"
              title="What will you get after booking your call?"
              align="center"
            />
          </Reveal>
          <Reveal className="yc-pills mt-5">
            {consultationTakeaways.map((t) => (
              <div className="yc-pill" key={t}>
                <FiCheck size={18} aria-hidden="true" />
                <span>{t}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center mt-5">
            <Button href="/enquiry/general">Book your consultancy</Button>
          </Reveal>
        </div>
      </section>

      <section className="yc-section yc-bg-cream-light" id="about-manish">
        <div className="yc-container">
          <div className="row g-5">
            <Reveal className="col-lg-5">
              <div className="yc-shape-arch">
                <Image
                  src="/images/team/yogacharya-manish-pranayama.jpg"
                  alt="Yogacharya Manish practising pranayama outdoors"
                  width={1200}
                  height={1500}
                  sizes="(max-width: 991px) 90vw, 38vw"
                  style={{ width: "100%", height: "clamp(340px, 46vw, 520px)", objectFit: "cover" }}
                />
              </div>
              <div className="yc-shape-soft mt-4">
                <Image
                  src="/images/team/manish-with-teacher.jpg"
                  alt="Yogacharya Manish practising alongside his teacher"
                  width={1200}
                  height={800}
                  sizes="(max-width: 991px) 90vw, 38vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Reveal>
            <Reveal className="col-lg-7" delay={100}>
              <SectionHeading eyebrow="His journey" title="About Yogacharya Manish" />
              {manish.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="row g-3 mt-3">
                {[
                  ["/images/studio/group-session-hall.jpg", "A large indoor group yoga session led by Yogic Company"],
                  ["/images/studio/group-session-outdoor.jpg", "A mass yoga session in an open hall"],
                  ["/images/studio/mass-session.jpg", "Hundreds of practitioners on mats at a Yogic Company event"],
                  ["/images/studio/studio-practice.jpg", "A studio class holding a forward-facing posture"],
                ].map(([src, alt]) => (
                  <div className="col-6" key={src}>
                    <div className="yc-shape-soft">
                      <Image
                        src={src}
                        alt={alt}
                        width={1400}
                        height={900}
                        sizes="(max-width: 991px) 45vw, 22vw"
                        style={{ width: "100%", height: "160px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section yc-bg-cream">
        <div className="yc-container">
          <div className="row g-5">
            <Reveal className="col-lg-4">
              <SectionHeading
                eyebrow="Questions"
                title="Frequently Asked Question"
                text="A couple of the questions we are asked most often before a first consultation."
              />
            </Reveal>
            <Reveal className="col-lg-8" delay={100}>
              <FaqAccordion items={consultationFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section--tight yc-bg-primary">
        <div className="yc-container">
          <h2 className="text-center mb-5">Our Social Media Handles</h2>
          <SocialStrip />
        </div>
      </section>

      <CtaBand
        title="Book Your Consultancy"
        text="Answer a few questions about what you are dealing with and we will come back to you personally."
        primary={{ label: "Book now", href: "/enquiry/general" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
