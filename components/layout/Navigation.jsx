"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { navigation } from "@/lib/site";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="yc-nav" aria-label="Primary">
      <ul className="yc-nav__list">
        {navigation.map((item) => (
          <li className="yc-nav__item" key={item.href}>
            <Link
              href={item.href}
              className="yc-nav__link"
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
              {item.children ? <FiChevronDown size={13} aria-hidden="true" /> : null}
            </Link>
            {item.children ? (
              <ul className="yc-nav__submenu">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
