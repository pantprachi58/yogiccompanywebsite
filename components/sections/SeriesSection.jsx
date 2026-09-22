import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const series = [
  {
    href: "/sutras",
    title: "Wisdom of the Sutras",
    subtitle: "Unlocking the Secrets of Patanjali's Yoga Philosophy",
    text: "A content series that delves into the profound teachings of Patanjali's Yoga Sutras, offering practical insights to enhance your spiritual and mental well-being.",
    cta: "View page",
    image: "/images/articles/sutras-hero.jpg",
  },
  {
    href: "/meditation",
    title: "The Art of Stillness",
    subtitle: "Meditation practices for a calmer, more focused mind",
    text: "A series dedicated to guiding individuals through different meditation forms, helping them cultivate mindfulness, reduce stress, and achieve a balanced mind.",
    cta: "Explore",
    image: "/images/articles/meditation-hero.jpg",
  },
  {
    href: "/blogs/the-biological-clock",
    title: "Seeds of Hope",
    subtitle: "Research from around the world",
    text: "A transformative content series dedicated to unravelling the complexities of infertility with compassion and science.",
    cta: "Learn more",
    image: "/images/articles/the-biological-clock.jpg",
  },
];

export default function SeriesSection() {
  return (
    <section className="yc-section yc-bg-cream">
      <div className="yc-container">
        <Reveal>
          <SectionHeading
            eyebrow="Content series"
            title="Study alongside your practice"
            text="Three ongoing series — philosophy, meditation and research — to read between sessions."
            align="center"
          />
        </Reveal>

        <div className="row g-4 mt-4">
          {series.map((item, i) => (
            <Reveal className="col-md-6 col-lg-4" key={item.href} delay={i * 110}>
              <article className="yc-card">
                <Link href={item.href} className="yc-card__media" aria-hidden="true" tabIndex={-1}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 30vw"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
                <div className="yc-card__body">
                  <h3 className="yc-card__title">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="yc-card__meta">{item.subtitle}</p>
                  <p className="yc-card__text">{item.text}</p>
                  <div className="yc-card__foot">
                    <Link className="yc-textlink" href={item.href}>
                      {item.cta} <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
