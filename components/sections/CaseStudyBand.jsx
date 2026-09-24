import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CaseStudyBand() {
  return (
    <section className="yc-section yc-bg-primary">
      <div className="yc-container">
        <div className="row g-5 align-items-center">
          <Reveal className="col-lg-6" animation="fade-up">
            <span className="yc-eyebrow">A Yogic Company case study</span>
            <h2>The Science Behind Yogic Breath and Healing</h2>
            <p className="yc-lead">
              Our white paper gives an evidence-based overview of yogic breathing
              (pranayama): the physiological mechanisms, the clinical research, and
              how it can be integrated into everyday care.
            </p>
            <div className="mt-4">
              <Button href="/whitepaper" variant="light">
                Learn More
              </Button>
            </div>
          </Reveal>

          <Reveal className="col-lg-6" animation="fade-up" delay={120}>
            <div className="yc-shape-soft">
              <Link href="/whitepaper" className="d-block">
                <Image
                  src="/images/ogic.png"
                  alt="A White Paper from The Yogic Company: book cover showing lungs formed from trees and clouds"
                  width={1429}
                  height={1101}
                  sizes="(max-width: 991px) 90vw, 45vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
