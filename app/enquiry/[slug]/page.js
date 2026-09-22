import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import QuizForm from "@/components/forms/QuizForm";
import CtaBand from "@/components/sections/CtaBand";
import { enquiryForms, getForm } from "@/lib/content/forms";

export function generateStaticParams() {
  return enquiryForms.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const form = getForm(slug);
  if (!form) return {};
  return {
    title: form.title,
    description: form.intro,
    alternates: { canonical: `/enquiry/${form.slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function EnquiryPage({ params }) {
  const { slug } = await params;
  const form = getForm(slug);
  if (!form || form.slug === "access-to-stillness") notFound();

  return (
    <>
      <PageHeader
        title={form.name}
        breadcrumb={[{ label: "Enquiry" }, { label: form.name }]}
        intro={form.intro}
      />
      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <Reveal>
                <QuizForm form={form} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Would you rather just talk?"
        text="Call or message us and we will find a time."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Book a consultation", href: "/consultation" }}
      />
    </>
  );
}
