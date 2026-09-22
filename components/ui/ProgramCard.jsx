import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProgramCard({ program }) {
  return (
    <article className="yc-program">
      <Image
        src={program.image}
        alt={`${program.name} programme`}
        fill
        sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 30vw"
        style={{ objectFit: "cover" }}
      />
      <h3 className="yc-program__title">{program.name}</h3>
      <p className="yc-program__text">{program.tagline}</p>
      <Link
        className="yc-textlink"
        href={`/programs/${program.slug}`}
        style={{ color: "#fff", borderColor: "rgba(255,255,255,.45)" }}
      >
        Dive into our flagship programme <FiArrowRight aria-hidden="true" />
      </Link>
    </article>
  );
}
