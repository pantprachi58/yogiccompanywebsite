import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo() {
  return (
    <Link href="/" className="yc-logo" aria-label={`${site.name} — home`}>
      <Image
        src="/images/brand/logo-lockup.png"
        alt={site.name}
        width={668}
        height={373}
        className="yc-logo__mark"
        priority
      />
    </Link>
  );
}
