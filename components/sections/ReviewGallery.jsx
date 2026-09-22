"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { reviews } from "@/lib/content/reviews";

export default function ReviewGallery() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className="yc-reviewgrid">
        {reviews.map((review, i) => (
          <button
            type="button"
            key={review.src}
            onClick={() => setIndex(i)}
            aria-label={`Open review ${i + 1} of ${reviews.length}`}
          >
            <Image
              src={review.src}
              alt={review.alt}
              width={review.w}
              height={review.h}
              sizes="(max-width: 575px) 45vw, (max-width: 991px) 32vw, 22vw"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </button>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={Math.max(index, 0)}
        slides={reviews.map((r) => ({ src: r.src, alt: r.alt, width: r.w, height: r.h }))}
      />
    </>
  );
}
