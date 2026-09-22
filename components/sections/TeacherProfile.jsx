import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TeacherProfile({ member, flip = false, priority = false }) {
  return (
    <div className={`row g-5 align-items-center${flip ? " flex-lg-row-reverse" : ""}`}>
      <Reveal className="col-lg-5" animation={flip ? "fade-left" : "fade-right"}>
        <div className="yc-teacher__media yc-shape-arch">
          <Image
            src={member.image}
            alt={member.imageAlt}
            width={1200}
            height={1500}
            sizes="(max-width: 991px) 90vw, 38vw"
            priority={priority}
            style={{ width: "100%", height: "clamp(360px, 48vw, 560px)", objectFit: "cover" }}
          />
        </div>
      </Reveal>

      <Reveal className="col-lg-7" animation={flip ? "fade-right" : "fade-left"}>
        <SectionHeading eyebrow={member.name} title={member.role} text={member.intro} />
        <h3 className="mt-4" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
          {member.bioHeading}
        </h3>
        {member.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Reveal>
    </div>
  );
}
