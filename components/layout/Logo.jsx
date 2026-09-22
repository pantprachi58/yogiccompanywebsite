import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ variant = "dark", withTagline = true }) {
  const src =
    variant === "light"
      ? "/images/brand/logo-mark-light.png"
      : "/images/brand/logo-mark-dark.png";

  return (
    <Link href="/" className="yc-logo" aria-label={`${site.name} — home`}>
      <Image
        src={src}
        alt=""
        width={319}
        height={175}
        className="yc-logo__mark"
        priority
      />
      <span className="yc-logo__text">
        <span
          className="yc-logo__name"
          style={variant === "light" ? { color: "#fff" } : undefined}
        >
          {site.name}
        </span>
        {withTagline ? (
          <span
            className="yc-logo__tag"
            style={variant === "light" ? { color: "rgba(255,255,255,.65)" } : undefined}
          >
            {site.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
