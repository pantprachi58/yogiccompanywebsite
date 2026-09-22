import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Glyph from "@/components/ui/Glyph";

const pillars = [
  { icon: "wave", title: "Breathing", text: "Classical pranayama, taught in stages." },
  { icon: "stillness", title: "Postures", text: "Mindful asana for strength and ease." },
  { icon: "lotus", title: "Rejuvenation", text: "Deep rest as the point, not the reward." },
];

export default function AboutIntro() {
  return (
    <section className="yc-section yc-bg-cream-light">
      <div className="yc-container">
        <div className="row g-5 align-items-center">
          <Reveal className="col-lg-6" animation="fade-right">
            <div className="row g-3 align-items-end">
              <div className="col-7">
                <div className="yc-shape-arch">
                  <Image
                    src="/images/hero/hero-namaste.jpg"
                    alt="Yogacharya Manish and Yogini Pooja standing in namaste in a light, plant-filled space"
                    width={1184}
                    height={864}
                    sizes="(max-width: 991px) 60vw, 30vw"
                    style={{ width: "100%", height: "440px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="yc-shape-arch-down">
                  <Image
                    src="/images/team/manish-and-pooja.jpg"
                    alt="Yogacharya Manish and Yogini Pooja seated in meditation"
                    width={1400}
                    height={800}
                    sizes="(max-width: 991px) 40vw, 20vw"
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-lg-6" animation="fade-left">
            <SectionHeading
              eyebrow="About Yogic Company"
              title="Breathing. Postures. Rejuvenation."
              text="At Yogic Company, we bring ancient Indian breathing techniques and mindful postures to the forefront, inspiring a journey of true rejuvenation. Our mission is to guide you toward balance, connection, and a renewed sense of vitality through holistic wellness practices."
            />

            <ul className="yc-featurelist">
              {pillars.map((pillar) => (
                <li key={pillar.title}>
                  <Glyph name={pillar.icon} size={30} />
                  <span>
                    <strong>{pillar.title}</strong>
                    {pillar.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 d-flex flex-wrap gap-3">
              <Button href="/aboutus">Meet the Teachers</Button>
              <Button href="/consultation" variant="outline">
                Book a consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
