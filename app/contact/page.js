import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import SocialStrip from "@/components/sections/SocialStrip";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import CtaBand from "@/components/sections/CtaBand";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Yogic Company about group classes, personal sessions, workplace wellness workshops or our flagship programmes.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: FiMapPin, label: "Where we are", value: site.location },
  { icon: FiMail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: FiPhone, label: "Call or WhatsApp", value: site.phone, href: site.phoneHref },
  {
    icon: FiClock,
    label: "Response time",
    value: "We usually reply within two working days",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumb={[{ label: "Contact Us" }]}
        intro="Tell us what you would like to work on and we will point you to the right class, session or programme."
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5">
            <Reveal className="col-lg-5">
              <SectionHeading
                eyebrow="Say hello"
                title="Talk to us about your practice"
                text="Whether you are starting from nothing or returning after a long break, a short conversation is the quickest way to find the right beginning."
              />
              <div className="row g-3 mt-3">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <div className="col-sm-6 col-lg-12" key={label}>
                    <div className="yc-infocard">
                      <span className="yc-infocard__icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span>
                        <span className="yc-infocard__label d-block">{label}</span>
                        {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="col-lg-7" delay={100}>
              <div
                className="yc-shape-soft"
                style={{ background: "var(--yc-cream)", padding: "clamp(1.5rem, 4vw, 2.75rem)" }}
              >
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Send us a message</h2>
                <p className="mb-4">
                  Those details stay with us — they are used to answer your enquiry
                  and nothing else.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="yc-section--tight yc-bg-primary">
        <div className="yc-container">
          <h2 className="text-center mb-5">Find us elsewhere</h2>
          <SocialStrip />
        </div>
      </section>

      <CtaBand
        title="Prefer to start with a session?"
        text="Request a time and we will confirm it with you directly."
        primary={{ label: "Book a session", href: "/book" }}
        secondary={{ label: "Book a consultation", href: "/consultation" }}
      />
    </>
  );
}
