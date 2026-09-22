import SectionHeading from "@/components/ui/SectionHeading";
import Testimonials from "@/components/sections/Testimonials";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function TestimonialsSection({ background = "yc-bg-cream" }) {
  return (
    <section className={`yc-section ${background}`}>
      <div className="yc-container">
        <Reveal className="yc-tslider__head">
          <SectionHeading
            eyebrow="Testimonials"
            title="Taking the journey along"
            text="Real practitioners, in their own words. Tap any card to watch their story on Instagram."
            className="mb-0"
          />
          <Button
            href="https://www.instagram.com/yogacharya_manish/"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more on Instagram
          </Button>
        </Reveal>

        <Reveal className="mt-5" delay={80}>
          <Testimonials />
        </Reveal>
      </div>
    </section>
  );
}
