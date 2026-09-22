import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CtaBand({
  eyebrow = "Start where you are",
  title = "Rediscover wellness, one breath at a time",
  text = "Tell us what you would like to work on and we will suggest a class or programme that fits.",
  primary = { label: "Book a Session", href: "/book" },
  secondary = { label: "Talk to us", href: "/contact" },
}) {
  return (
    <section className="yc-section position-relative" style={{ overflow: "hidden" }}>
      <Image
        src="/images/about/leaf-texture.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: -2 }}
      />
      <span
        aria-hidden="true"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(46, 60, 50, 0.78)", zIndex: -1 }}
      />
      <div className="yc-container text-center">
        <Reveal>
          <span className="yc-eyebrow" style={{ color: "var(--yc-tint)" }}>
            {eyebrow}
          </span>
          <h2 style={{ color: "#fff" }}>{title}</h2>
          <p className="yc-lead mx-auto" style={{ color: "rgba(255,255,255,.85)" }}>
            {text}
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Button href={primary.href} variant="light">
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="ghostLight">
              {secondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
