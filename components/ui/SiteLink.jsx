"use client";

import Link from "next/link";
import { useConsultation } from "@/components/ui/ConsultationProvider";

const CONSULTATION_HREF = "/consultation";

/**
 * next/link that opens the consultation modal for /consultation links.
 * It stays a real link, so modified clicks (new tab), crawlers and visitors
 * without JavaScript still reach the /consultation page.
 */
export default function SiteLink({ href, onClick, ...rest }) {
  const { open } = useConsultation();

  const handleClick = (event) => {
    onClick?.(event);
    if (
      href !== CONSULTATION_HREF ||
      !open ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    open();
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
