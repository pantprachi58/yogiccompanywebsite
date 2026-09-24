"use client";

import { useEffect, useRef } from "react";

// Decorative, muted, looping video that fills its positioned parent. Playback
// is started from script rather than the autoplay attribute so visitors who
// prefer reduced motion never see it begin — they keep the poster still — and
// it pauses whenever it is scrolled out of view.
export default function BackgroundVideo({ src, poster, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;

    const apply = () => {
      if (query.matches || !visible) video.pause();
      else video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      apply();
    });

    video.muted = true;
    observer.observe(video);
    query.addEventListener("change", apply);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", apply);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className || undefined}
      src={src}
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
