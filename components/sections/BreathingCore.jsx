import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import LoopVideo from "@/components/ui/LoopVideo";

export default function BreathingCore() {
  return (
    <section className="yc-section yc-bg-primary" id="breathing">
      <div className="yc-container">
        <div className="row g-5 align-items-center">
          <Reveal className="col-lg-5" animation="fade-right">
            <LoopVideo
              src="/video/Breathe.mp4"
              label="Guided breathing animation: breathe in, hold, breathe out"
              sound
            />
          </Reveal>

          <Reveal className="col-lg-7" animation="fade-left">
            <SectionHeading
              eyebrow="Breathing — The Core"
              title="Breathe to Heal. Breathe to Awaken."
            />
            <p className="yc-lead">
              Breath is not just air—it&rsquo;s life&rsquo;s most intimate force, silently
              weaving the body and mind together. In our fast-paced world, most have
              forgotten how to breathe deeply, and in doing so, lost touch with their
              natural power to heal.
            </p>
            <p>
              At Yogic Company, we teach the ancient science of conscious breathing—a
              gentle yet transformative practice that floods your body with up to 20
              times more oxygen. This surplus breath doesn&rsquo;t just energize; it
              heals. It soothes stress, balances hormones, and restores clarity. From
              chronic pain and thyroid imbalances to diabetes, anxiety, and asthma—our
              breathwork is helping people reclaim vitality, one mindful inhale at a
              time.
            </p>
            <div className="mt-4 d-flex flex-wrap gap-3">
              <Button href="/whitepaper" variant="light">
                Read the white paper
              </Button>
              <Button href="/programs/breathe-life-guide" variant="ghostLight">
                Breathe Life programme
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
