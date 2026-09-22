"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Pagination } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/content/testimonials";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = (s) => {
    setAtStart(s.isBeginning);
    setAtEnd(s.isEnd);
  };

  return (
    <div className="yc-tslider">
      <Swiper
        modules={[Autoplay, A11y, Pagination]}
        onSwiper={(s) => {
          swiperRef.current = s;
          sync(s);
        }}
        onSlideChange={sync}
        onResize={sync}
        speed={600}
        autoplay={{ delay: 5500, disableOnInteraction: true }}
        pagination={{ el: ".yc-tslider__dots", clickable: true }}
        spaceBetween={20}
        slidesPerView={1.08}
        breakpoints={{
          576: { slidesPerView: 1.6, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 24 },
          992: { slidesPerView: 3, spaceBetween: 24 },
          1400: { slidesPerView: 3, spaceBetween: 28 },
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={testimonial.name} className="h-auto">
            <TestimonialCard testimonial={testimonial} priority={i < 3} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="yc-tslider__controls">
        <button
          type="button"
          className="yc-swiper-btn"
          aria-label="Previous testimonials"
          disabled={atStart}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FiArrowLeft aria-hidden="true" />
        </button>

        <div className="yc-tslider__dots" />

        <button
          type="button"
          className="yc-swiper-btn"
          aria-label="Next testimonials"
          disabled={atEnd}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
