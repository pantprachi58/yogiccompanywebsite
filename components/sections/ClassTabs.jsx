"use client";

import { useState } from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { classes } from "@/lib/content/classes";

export default function ClassTabs() {
  const [active, setActive] = useState(classes[0].id);
  const current = classes.find((c) => c.id === active) || classes[0];

  return (
    <div>
      <div className="yc-tabs" role="tablist" aria-label="Class formats">
        {classes.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={active === item.id}
            aria-controls={`panel-${item.id}`}
            className="yc-tab"
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="row g-5 align-items-center"
      >
        <div className="col-lg-6">
          <div className="yc-shape-arch">
            <Image
              src={current.image}
              alt={current.imageAlt}
              width={1000}
              height={800}
              sizes="(max-width: 991px) 92vw, 45vw"
              style={{ width: "100%", height: "clamp(320px, 45vw, 480px)", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <h3>{current.title}</h3>
          <p className="yc-text-muted-sm mb-3" style={{ letterSpacing: "0.08em" }}>
            {current.tagline}
          </p>
          <p>{current.description}</p>
          <ul className="yc-featurelist">
            {current.highlights.map((h) => (
              <li key={h}>
                <FiCheck size={18} aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 d-flex flex-wrap gap-3">
            <Button href={`/classes#${current.id}`}>Learn More</Button>
            <Button href="/enquiry/general" variant="outline">
              Enquire
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
