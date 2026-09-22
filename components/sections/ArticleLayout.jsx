import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RichBlocks from "@/components/ui/RichBlocks";
import ArticleCard from "@/components/ui/ArticleCard";
import CtaBand from "@/components/sections/CtaBand";

export default function ArticleLayout({
  item,
  basePath,
  collectionLabel,
  related = [],
  asideTitle = "More from the library",
  cta,
}) {
  return (
    <>
      <PageHeader
        title={item.title}
        breadcrumb={[{ label: collectionLabel, href: basePath }, { label: item.title }]}
        intro={item.subtitle}
      />

      <article className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal className="yc-shape-soft mb-5">
            <Image
              src={item.image}
              alt={`${item.title} — ${item.subtitle}`}
              width={item.imageWidth || 1400}
              height={item.imageHeight || 900}
              sizes="(max-width: 1290px) 92vw, 1290px"
              priority
              style={{ width: "100%", height: "clamp(240px, 40vw, 520px)", objectFit: "cover" }}
            />
          </Reveal>

          <div className="row g-5">
            <div className="col-lg-8">
              <div className="yc-article">
                <RichBlocks blocks={item.blocks} />
              </div>
            </div>

            <aside className="col-lg-4">
              <div className="yc-toc">
                <div className="yc-card">
                  <div className="yc-card__body">
                    <h2 className="yc-card__title">{asideTitle}</h2>
                    <ul className="yc-footer__list" style={{ color: "var(--yc-text)" }}>
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link className="yc-textlink" href={`${basePath}/${r.slug}`}>
                            {r.title} <FiArrowRight aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link className="yc-textlink" href={basePath}>
                          All {collectionLabel.toLowerCase()} <FiArrowRight aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="yc-section yc-bg-cream">
          <div className="yc-container">
            <h2 className="text-center mb-5">Keep reading</h2>
            <div className="row g-4">
              {related.map((r, i) => (
                <Reveal className="col-md-6 col-lg-4" key={r.slug} delay={i * 100}>
                  <ArticleCard item={r} basePath={basePath} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand {...(cta || {})} />
    </>
  );
}
