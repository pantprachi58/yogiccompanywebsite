"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link href="/" className="yc-logo" aria-label={`${site.name} — home`}>
      <Image
        src={scrolled ? "/images/brand/logo-lockup.png" : "/images/brand/logo-lockup.png"}
        alt={site.name}
        width={668}
        height={373}
        className="yc-logo__mark"
        style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
        priority
      />
    </Link>
  );
}
