import { FiCheck } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import BookingForm from "@/components/forms/BookingForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Book a Session",
  description:
    "Request a Yogic Company group class, one-to-one personal session or workplace wellness workshop. We confirm every booking personally.",
  alternates: { canonical: "/book" },
};

const reassurance = [
  "No experience or flexibility required",
  "Sessions adapted to injuries and conditions",
  "Group, one-to-one and workplace formats",
  "Every request confirmed by a person",
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        title="Book a Session"
        breadcrumb={[{ label: "Book a Session" }]}
        intro="Tell us the format and time you would like, and we will confirm it with you directly."
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row g-5">
            <Reveal className="col-lg-5">
              <SectionHeading
                eyebrow="Before you book"
                title="A first session, arranged around you"
                text="We do not run an automated calendar. Send us what suits you and we will come back with a time that works for both of us."
              />
              <ul className="yc-featurelist">
                {reassurance.map((r) => (
                  <li key={r}>
                    <FiCheck size={18} aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 yc-text-muted-sm">
                Prefer to talk first? Call or message{" "}
                <a href={site.phoneHref}>{site.phone}</a>.
              </p>
            </Reveal>

            <Reveal className="col-lg-7" delay={100}>
              <div
                className="yc-shape-soft"
                style={{ background: "var(--yc-cream)", padding: "clamp(1.5rem, 4vw, 2.75rem)" }}
              >
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Request a session</h2>
                <BookingForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
