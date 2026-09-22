import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Yogic Company collects, uses and protects the personal information you share through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumb={[{ label: "Privacy Policy" }]} />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="yc-article">
            <p className="yc-lead">
              This page explains what personal information {site.name} collects
              through this website, why we collect it, and what we do with it.
            </p>

            <h2>What we collect</h2>
            <p>
              We only collect what you give us. That means the details you type
              into the contact form, the booking request form or the newsletter
              signup — typically your name, email address, phone number if you
              choose to share it, and whatever you write in the message.
            </p>

            <h2>Why we collect it</h2>
            <ul>
              <li>To reply to an enquiry you have sent us.</li>
              <li>To arrange, confirm and adapt a session you have requested.</li>
              <li>To send occasional updates, if you have asked for them.</li>
            </ul>

            <h2>Health information</h2>
            <p>
              If you tell us about an injury, a condition or a medication so that
              we can adapt your practice, we treat that as confidential. It is used
              to teach you safely and is not shared outside the teaching team.
            </p>

            <h2>What we do not do</h2>
            <p>
              We do not sell your information, and we do not pass it to third
              parties for their own marketing. We do not use your details for any
              purpose other than the one you gave them for.
            </p>

            <h2>Keeping and removing your information</h2>
            <p>
              We keep enquiry and booking details for as long as we are working
              together, and for a reasonable period afterwards. You can ask us at
              any time to tell you what we hold, to correct it, or to delete it —
              write to <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>Newsletter</h2>
            <p>
              If you subscribe, you can unsubscribe at any time using the link in
              any email we send, or by writing to us.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If this policy changes we will update this page. For anything that is
              unclear, please contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
