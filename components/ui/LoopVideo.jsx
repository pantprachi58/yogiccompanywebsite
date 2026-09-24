"use client";

import { useEffect, useRef, useState } from "react";

function SoundIcon({ muted }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 9v6h4l5 4V5L7 9H3z" />
      {muted ? (
        <path
          d="M16 9.5l5 5m0-5l-5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

// Looping, inline video in a framed card. Starts muted (browsers block
// autoplay with sound) and, when `sound` is set, shows a pill in the corner
// that turns the audio on and off. Playback holds still for visitors who
// prefer reduced motion — native controls appear so it can be played — and
// pauses whenever the card is scrolled out of view so audio never plays unseen.
export default function LoopVideo({
  src,
  label,
  sound = false,
  soundLabel = "Practice",
  className = "",
}) {
  const ref = useRef(null);
  const [reduced, setReduced] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;

    const apply = () => {
      if (query.matches || !visible) video.pause();
      else video.play().catch(() => {});
    };

    const onQueryChange = () => {
      setReduced(query.matches);
      apply();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        apply();
      },
      { threshold: 0.25 }
    );

    setReduced(query.matches);
    observer.observe(video);
    query.addEventListener("change", onQueryChange);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", onQueryChange);
    };
  }, []);

  const toggleSound = () => {
    const video = ref.current;
    if (video) video.muted = !video.muted;
  };

  return (
    <div className={`yc-shape-soft yc-loopvideo ${className}`.trim()}>
      <video
        ref={ref}
        src={src}
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={reduced}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
      />
      {sound && (
        <button
          type="button"
          className="yc-loopvideo__sound"
          onClick={toggleSound}
          title={muted ? "Turn sound on" : "Turn sound off"}
        >
          <SoundIcon muted={muted} />
          <span>
            {muted ? "Sound off" : "Sound on"} &bull; {soundLabel}
          </span>
        </button>
      )}
    </div>
  );
}
