import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook } from "react-icons/fi";
import { site, footerLinks, socials } from "@/lib/site";
import NewsletterForm from "@/components/forms/NewsletterForm";
import SocialStrip from "@/components/sections/SocialStrip";

export default function Footer() {
  return (
    <footer className="yc-footer">
      <div className="yc-container" style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)" }}>
        <SocialStrip />

        <hr className="my-5" style={{ borderColor: "rgba(255,255,255,.18)", opacity: 1 }} />

        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <h2 className="yc-footer__title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
              Start your practice today
            </h2>
            <p style={{ maxWidth: "34rem" }}>
              Breathing, postures and rejuvenation — a monthly note with practice
              ideas, new writing and upcoming sessions.
            </p>
            <NewsletterForm />
          </div>

          {footerLinks.map((group) => (
            <div className="col-6 col-lg-2" key={group.title}>
              <h3 className="yc-footer__title">{group.title}</h3>
              <ul className="yc-footer__list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-12 col-lg-3">
            <h3 className="yc-footer__title">Contact</h3>
            <ul className="yc-footer__list">
              <li className="d-flex gap-2">
                <FiMapPin className="flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{site.location}</span>
              </li>
              <li className="d-flex gap-2">
                <FiPhone className="flex-shrink-0 mt-1" aria-hidden="true" />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li className="d-flex gap-2">
                <FiMail className="flex-shrink-0 mt-1" aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="yc-footer__wordmark" aria-hidden="true">
        {site.name}
      </p>

      <div className="yc-container">
        <div className="text-center mb-3" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
          {site.locationTagline}
        </div>
        
        <div className="yc-footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <span className="d-flex gap-3 flex-wrap">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
