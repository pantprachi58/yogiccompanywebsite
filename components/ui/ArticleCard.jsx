import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ArticleCard({ item, basePath, priority = false, cta = "Show more" }) {
  const href = `${basePath}/${item.slug}`;
  return (
    <article className="yc-card">
      <Link href={href} className="yc-card__media" aria-hidden="true" tabIndex={-1}>
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 30vw"
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      </Link>
      <div className="yc-card__body">
        {item.category ? <span className="yc-card__meta">{item.category}</span> : null}
        <h3 className="yc-card__title">
          <Link href={href}>{item.title}</Link>
        </h3>
        {item.subtitle ? <p className="yc-card__meta">{item.subtitle}</p> : null}
        {item.excerpt && item.excerpt !== item.subtitle ? (
          <p className="yc-card__text">{item.excerpt}</p>
        ) : null}
        <div className="yc-card__foot">
          <Link className="yc-textlink" href={href}>
            {cta} <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
