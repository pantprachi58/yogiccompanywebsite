"use client";

import { useState } from "react";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { navigation, site } from "@/lib/site";
import Button from "@/components/ui/Button";

export default function MobileNav({ show, onHide }) {
  const [open, setOpen] = useState(null);

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement="end"
      className="yc-offcanvas"
      aria-labelledby="mobile-nav-title"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="mobile-nav-title" className="yc-logo__name">
          {site.name}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="yc-mobilenav">
          {navigation.map((item) => (
            <li key={item.href}>
              <div className="yc-mobilenav__row">
                <Link href={item.href} onClick={onHide}>
                  {item.label}
                </Link>
                {item.children ? (
                  <button
                    type="button"
                    className="yc-mobilenav__toggle"
                    onClick={() => setOpen(open === item.href ? null : item.href)}
                    aria-expanded={open === item.href}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    {open === item.href ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                ) : null}
              </div>
              {item.children && open === item.href ? (
                <ul className="yc-mobilenav__sub">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={onHide}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="d-grid gap-3 mt-4">
          <Button href="/book" onClick={onHide}>
            Book a Session
          </Button>
          <div className="yc-text-muted-sm">
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
