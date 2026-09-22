import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { site, socials } from "@/lib/site";

const ICONS = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

export default function SocialStrip() {
  return (
    <div className="yc-social-strip">
      {socials.map(({ label, meta, href, icon }) => {
        const Icon = ICONS[icon] || FaInstagram;
        return (
          <a
            className="yc-social-strip__item"
            href={href}
            key={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon aria-hidden="true" />
            <strong>{label}</strong>
            <span>{meta}</span>
          </a>
        );
      })}
      <a className="yc-social-strip__item" href={`mailto:${site.email}`}>
        <FiMail aria-hidden="true" />
        <strong>{site.email}</strong>
        <span>Write to us</span>
      </a>
      <a className="yc-social-strip__item" href={site.phoneHref}>
        <FiPhone aria-hidden="true" />
        <strong>{site.phone}</strong>
        <span>Call us</span>
      </a>
    </div>
  );
}
