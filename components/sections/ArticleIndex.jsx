import Reveal from "@/components/ui/Reveal";
import ArticleCard from "@/components/ui/ArticleCard";

export default function ArticleIndex({ items, basePath, cta = "Show more", background = "yc-bg-cream-light" }) {
  return (
    <section className={`yc-section ${background}`}>
      <div className="yc-container">
        <div className="row g-4">
          {items.map((item, i) => (
            <Reveal className="col-md-6 col-lg-4" key={item.slug} delay={(i % 3) * 100}>
              <ArticleCard item={item} basePath={basePath} priority={i < 3} cta={cta} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
