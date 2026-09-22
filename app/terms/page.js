import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply to Yogic Company classes, programmes and workshops, including bookings, cancellations and health guidance.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms &amp; Conditions"
        breadcrumb={[{ label: "Terms & Conditions" }]}
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="yc-article">
            <p className="yc-lead">
              These terms apply to classes, programmes and workshops taught by{" "}
              {site.name}, and to your use of this website.
            </p>

            <h2>Bookings</h2>
            <p>
              A request sent through this website is an enquiry, not a confirmed
              booking. A session is confirmed only once we have replied to you with
              an agreed time.
            </p>

            <h2>Cancellations and changes</h2>
            <p>
              Please let us know as early as you can if you need to move or cancel a
              session, so the time can be offered to someone else. Where we need to
              reschedule, we will offer you an alternative time.
            </p>

            <h2>Health and safety</h2>
            <p>
              Yoga and breathwork are taught here as wellness practices. They are
              not medical treatment and do not replace advice, diagnosis or care
              from a qualified clinician. Please tell us before you begin about any
              injury, condition, pregnancy or medication that may affect your
              practice, and continue to follow your clinician&rsquo;s guidance.
            </p>
            <p>
              During a session, work within your own range. Stop and tell us if
              anything causes pain, dizziness or breathlessness.
            </p>

            <h2>Participation</h2>
            <p>
              You take part at your own discretion and remain responsible for your
              own wellbeing during a session. We ask that you arrive on time, keep
              the space calm for others, and let us know if anything about the pace
              or the practice is not working for you.
            </p>

            <h2>Content on this site</h2>
            <p>
              Text, images and materials on this website belong to {site.name}
              unless stated otherwise. Please do not reproduce them without asking.
              Articles here are educational and general; they are not personal
              advice.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can go to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
