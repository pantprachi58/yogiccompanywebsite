import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import CtaBand from "@/components/sections/CtaBand";
import { classes, sessionFormats } from "@/lib/content/classes";
import { marqueeItems } from "@/lib/site";

export const metadata = {
  title: "Our Classes",
  description:
    "Group classes, one-to-one personal sessions and workplace wellness workshops from Yogic Company — yoga, breathwork and relaxation for every level.",
  alternates: { canonical: "/classes" },
};

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        title="Our Classes"
        breadcrumb={[{ label: "Classes" }]}
        intro="Practise in a group, one to one, or bring the practice into your workplace."
      />

      {classes.map((item, i) => (
        <section
          key={item.id}
          id={item.id}
          className={`yc-section ${i % 2 === 0 ? "yc-bg-cream-light" : "yc-bg-cream"}`}
          style={{ scrollMarginTop: "6rem" }}
        >
          <div className="yc-container">
            <div
              className={`row g-5 align-items-center${i % 2 === 1 ? " flex-lg-row-reverse" : ""}`}
            >
              <Reveal className="col-lg-6" animation={i % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className={i % 2 === 0 ? "yc-shape-arch" : "yc-shape-arch-down"}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={1000}
                    height={800}
                    sizes="(max-width: 991px) 92vw, 46vw"
                    priority={i === 0}
                    style={{
                      width: "100%",
                      height: "clamp(320px, 44vw, 480px)",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Reveal>

              <Reveal className="col-lg-6" animation={i % 2 === 0 ? "fade-left" : "fade-right"}>
                <SectionHeading
                  eyebrow={`0${i + 1} — ${item.tagline}`}
                  title={item.title}
                  text={item.description}
                />
                <ul className="yc-featurelist">
                  {item.highlights.map((h) => (
                    <li key={h}>
                      <FiCheck size={18} aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button href="/book">Book this format</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <Marquee items={marqueeItems} />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <SectionHeading
              eyebrow="Session formats"
              title="Find the session that fits your week"
              text="Times are arranged individually rather than fixed to a timetable, so sessions can be placed where they actually work for you."
              align="center"
            />
          </Reveal>

          <Reveal className="mt-5">
            <div>
              {sessionFormats.map((row) => (
                <div className="yc-row-item" key={row.title}>
                  <div>
                    <h3 className="yc-row-item__title">{row.title}</h3>
                    <span className="yc-row-item__tag">{row.format}</span>
                  </div>
                  <p className="mb-0">{row.focus}</p>
                  <p className="mb-0 yc-text-muted-sm">By arrangement</p>
                  <Link className="yc-textlink" href="/book">
                    Book <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Bring the practice to your team"
        text="Our wellness workshop runs inside a normal working day — one session of breathwork, one of desk-friendly postures."
        primary={{ label: "Enquire about a workshop", href: "/contact" }}
        secondary={{ label: "See all programmes", href: "/programs" }}
      />
    </>
  );
}
