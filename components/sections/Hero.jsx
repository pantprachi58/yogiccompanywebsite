"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-fade";
import Button from "@/components/ui/Button";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

const slides = [
  {
    lead: "Awakening Human Consciousness Through",
    accent: "Breath & Stillness",
    text: "Recover from anxiety, panic, and chronic stress through personalized Pranayama & traditional Yogic Science.",
    cta: { label: "Explore Programs", href: "/programs" },
  },
  {
    lead: "Breathing. Postures.",
    accent: "Rejuvenation",
    text: "A holistic practice that blends yoga, breathwork and relaxation to restore balance in body, mind and breath.",
    cta: { label: "Join a Class", href: "/classes" },
  },
  {
    lead: "Breathe. Live.",
    accent: "Love",
    text: "Your mind doesn't need another app. It needs the right practice — and a guide who knows you.",
    cta: { label: "Book a Consultation", href: "/consultation" },
  },
];

export default function Hero() {
  return (
    <section className="yc-hero" aria-label="Introduction">
      <h1 className="visually-hidden">
        Yogic Company — breathing, postures and rejuvenation
      </h1>
      <div className="yc-hero__media" aria-hidden="true">
        <BackgroundVideo src="/video/1.mp4" poster="/images/hero/hero-namaste.jpg" />
      </div>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={900}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation={{ prevEl: ".yc-hero-prev", nextEl: ".yc-hero-next" }}
        slidesPerView={1}
        allowTouchMove
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.accent}>
            <div className="yc-hero__slide">
              <div className="yc-container">
                <div className="yc-hero__content">
                  <span className="yc-eyebrow" style={{ color: "var(--yc-tint)" }}>
                    Yogic Company
                  </span>
                  <p className="yc-hero__title">
                    <span>{slide.lead}</span>
                    <em>{slide.accent}</em>
                  </p>
                  <p className="yc-hero__text yc-lead">{slide.text}</p>
                  <Button href={slide.cta.href} variant="light">
                    {slide.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="yc-hero__nav">
        <div className="yc-container yc-hero__navinner">
          <button type="button" className="yc-hero__navbtn yc-hero-prev" aria-label="Previous slide">
            <FiArrowLeft aria-hidden="true" /> Prev
          </button>
          <button type="button" className="yc-hero__navbtn yc-hero-next" aria-label="Next slide">
            Next <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
