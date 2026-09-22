"use client";

import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "@/components/layout/Logo";
import Navigation from "@/components/layout/Navigation";
import MobileNav from "@/components/layout/MobileNav";
import Button from "@/components/ui/Button";
import { marqueeItems } from "@/lib/site";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ticker = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <div className="yc-topbar" aria-hidden="true">
        <div className="yc-topbar__track">
          {ticker.map((item, i) => (
            <span className="yc-topbar__item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <header className={`yc-header yc-header--solid${solid ? " yc-header--scrolled" : ""}`}>
        <div className="yc-container">
          <div className="yc-header__inner">
            <Logo />
            <Navigation />
            <div className="yc-header__actions">
              <Button href="/consultation" size="sm" className="yc-header__cta">
                Book a Consultation
              </Button>
              <button
                type="button"
                className="yc-burger"
                onClick={() => setNavOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav show={navOpen} onHide={() => setNavOpen(false)} />
    </>
  );
}
