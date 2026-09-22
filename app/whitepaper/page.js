import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RichBlocks from "@/components/ui/RichBlocks";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/sections/CtaBand";
import { whitePaper } from "@/lib/content/whitepaper";
import { site } from "@/lib/site";

export const metadata = {
  title: "The Science Behind Yogic Breathing (Pranayama) and Healing",
  description:
    "A Yogic Company white paper: an evidence-based overview of yogic breathing (pranayama), its physiological mechanisms, the clinical research and how it can be integrated into care.",
  alternates: { canonical: "/whitepaper" },
  openGraph: {
    type: "article",
    title: "Yogic Breathing White Paper | Yogic Company",
    images: [{ url: whitePaper.image }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "The Science Behind Yogic Breathing (Pranayama) and Healing",
  author: { "@type": "Organization", name: site.name },
  publisher: { "@type": "Organization", name: site.name },
  mainEntityOfPage: `${site.url}/whitepaper`,
};

export default function WhitePaperPage() {
  return (
    <>
      <PageHeader
        title="Yogic Breathing White Paper"
        breadcrumb={[{ label: "White Paper" }]}
        intro="The Science Behind Yogic Breathing (Pranayama) and Healing — a Yogic Company case study."
      />

      <article className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal className="yc-shape-soft mb-5">
            <Image
              src={whitePaper.image}
              alt="Lungs formed from trees and clouds — the Yogic Company white paper cover"
              width={whitePaper.imageWidth || 1400}
              height={whitePaper.imageHeight || 900}
              sizes="(max-width: 1290px) 92vw, 1290px"
              priority
              style={{ width: "100%", height: "clamp(240px, 40vw, 520px)", objectFit: "cover" }}
            />
          </Reveal>

          <div className="row g-5">
            <div className="col-lg-8" style={{ paddingRight: "clamp(1rem, 4vw, 3.5rem)" }}>
              <div className="yc-article" style={{ lineHeight: "1.75" }}>
                <RichBlocks blocks={whitePaper.blocks} />
              </div>
            </div>
            <aside className="col-lg-4">
              <div className="yc-toc">
                <div className="yc-card">
                  <div className="yc-card__body">
                    <h2 className="yc-card__title">Put it into practice</h2>
                    <p className="yc-card__text">
                      This paper underpins our Breathe Life programme. If you would
                      like it walked through, get in touch and we will take you
                      through it.
                    </p>
                    <div className="d-grid gap-2 mt-2">
                      <Button href="/programs/breathe-life-guide" size="sm">
                        Breathe Life programme
                      </Button>
                      <Button href="/whitepaper.pdf" size="sm" target="_blank" rel="noopener noreferrer">
                        Download Full White Paper (PDF)
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CtaBand
        title="Breathe to heal. Breathe to awaken."
        text="Learn the practices in this paper with a teacher, adapted to your own breath."
        primary={{ label: "Start an enquiry", href: "/enquiry/general" }}
        secondary={{ label: "About our approach", href: "/aboutus#breathing" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
