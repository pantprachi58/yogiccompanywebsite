"use client";

import { useState } from "react";
import { FiPlay } from "react-icons/fi";

// Client video testimonials, hosted on the Yogic Company Google Drive as on the
// live site. They load only when a visitor asks for one, so the page does not
// pull eight third-party players on first paint.
const VIDEOS = [
  "1Oi4OHi8WYQt3wOArgLBfy5I_WZZJTplF",
  "1781Q59yt0o5tgxziOm4iLE981EuV0FAV",
  "1gVsUuxBzyL5rFFvTr9Of_02k7cj5DZ0V",
  "1d7XgqxWr5_78CqQ4Ml3oB3bloAVT3DXr",
  "119kzltbiGKnheUrenYKLW8hKepjaPr9M",
  "1dv17qquk8wHO29_ax-OuXFxqH9bAAXRy",
  "1GjxQC9Xsvq0jdKv71tfE0usYxg9HCjNF",
  "1Dnd6eIMhb-Oj35810Zp-CnoMCguMfvx3",
];

export default function VideoTestimonials() {
  const [playing, setPlaying] = useState([]);

  return (
    <div className="yc-videogrid">
      {VIDEOS.map((id, i) => {
        const label = `Client video testimonial ${i + 1} of ${VIDEOS.length}`;
        return (
          <div className="yc-video" key={id}>
            {playing.includes(id) ? (
              <iframe
                src={`https://drive.google.com/file/d/${id}/preview`}
                title={label}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="yc-video__poster"
                onClick={() => setPlaying((p) => [...p, id])}
                aria-label={`Play ${label.toLowerCase()}`}
              >
                <span className="yc-video__play" aria-hidden="true">
                  <FiPlay />
                </span>
                <span className="yc-video__caption">Watch testimonial {i + 1}</span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
