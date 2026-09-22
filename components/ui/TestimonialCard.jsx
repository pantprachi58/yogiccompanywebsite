import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

export default function TestimonialCard({ testimonial, priority = false }) {
  const { name, topic, place, quote, image, instagram } = testimonial;

  return (
    <a
      className="yc-tcard"
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${name}'s story on Instagram`}
    >
      <span className="yc-tcard__media">
        <Image
          src={image}
          alt={`${name}, who practises with Yogic Company`}
          fill
          sizes="(max-width: 575px) 86vw, (max-width: 991px) 44vw, 30vw"
          priority={priority}
          style={{ objectFit: "cover" }}
        />
        <span className="yc-tcard__ig" aria-hidden="true">
          <FaInstagram />
        </span>
      </span>

      <span className="yc-tcard__body">
        <span className="yc-tcard__topic">{topic}</span>
        <span className="yc-tcard__quote">
          <span className="yc-tcard__mark" aria-hidden="true">
            &ldquo;
          </span>
          {quote}
        </span>
        <span className="yc-tcard__foot">
          <span>
            <span className="yc-tcard__name">{name}</span>
            <span className="yc-tcard__place">{place}</span>
          </span>
          <span className="yc-tcard__cta">
            Watch on Instagram <FiArrowUpRight aria-hidden="true" />
          </span>
        </span>
      </span>
    </a>
  );
}
