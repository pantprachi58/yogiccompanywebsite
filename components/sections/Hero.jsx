"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-fade";
import Button from "@/components/ui/Button";

const slides = [
  {
    lead: "Awakening Human Consciousness Through",
    accent: "Breath & Stillness",
    text: "Rooted in Himalayan yogic lineage. Guided practices in classical pranayama, consciousness exploration, and therapeutic restoration.",
    cta: { label: "Explore Programs", href: "/programs" },
    image: "/images/hero/hero-namaste.jpg",
    alt: "Two practitioners standing in namaste in a light, plant-filled space",
    priority: true,
  },
  {
    lead: "Breathing. Postures.",
    accent: "Rejuvenation",
    text: "A holistic practice that blends yoga, breathwork and relaxation to restore balance in body, mind and breath.",
    cta: { label: "Join a Class", href: "/classes" },
    image: "/images/hero/open-landscape.jpg",
    alt: "Open grassland under a wide, softly lit sky at dusk",
  },
  {
    lead: "Breathe. Live.",
    accent: "Love",
    text: "Flagship programmes for stress, breath capacity and sleep — guided live, adapted to you, and built to keep.",
    cta: { label: "Book a Consultation", href: "/consultation" },
    image: "/images/about/rejuvenation-banner.jpg",
    alt: "Rejuvenation — unlocking the calm within",
  },
];

export default function Hero() {
  return (
    <section className="yc-hero" aria-label="Introduction">
      <h1 className="visually-hidden">
        Yogic Company — breathing, postures and rejuvenation
      </h1>
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
              <div className="yc-hero__media">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={slide.priority}
                  style={{ objectFit: "cover" }}
                />
              </div>
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
