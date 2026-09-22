"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryGrid({ images = [] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="yc-gallery">
        {images.map((image, i) => (
          <button
            type="button"
            className="yc-gallery__item"
            key={image.src}
            onClick={() => setIndex(i)}
            aria-label={`Open image: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 575px) 90vw, (max-width: 991px) 45vw, 24vw"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={Math.max(index, 0)}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          width: image.width,
          height: image.height,
        }))}
      />
    </>
  );
}
