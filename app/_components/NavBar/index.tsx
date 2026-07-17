"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./navbar.module.css";
import mockNavItems from "./nav-items.json";
import type { Slide } from "@/app/_data/tenses";

export interface NavItem {
  label: string;
  /** Slug identifying which slide deck to load, e.g. "present-simple". */
  slug?: string;
  data?: Slide[];
  href?: string;
  /** Emoji or short glyph shown when the nav is collapsed. */
  icon?: string;
}

export interface NavBarProps {
  /** Nav links to render. Defaults to the mock data in nav-items.json. */
  items?: NavItem[];
  /** Whether the nav starts expanded. Defaults to true. */
  defaultExpanded?: boolean;
}

function NavList({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeSlug = searchParams.get("slug");

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const href = item.data
          ? `/preview/cover?slug=${item.slug}`
          : item.href;

        const isActive = item.data
          ? pathname === "/preview/cover" && activeSlug === item.slug
          : !!item.href && pathname === item.href;

        return (
          <li key={item.label}>
            {href && (
              <Link
                href={href}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                title={item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
              >
                <span className={styles.label}>{item.label}</span>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function NavBar({
  items = mockNavItems,
  defaultExpanded = false,
}: NavBarProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <nav
      className={`${styles.nav} ${expanded ? styles.expanded : styles.collapsed}`}
      aria-label="Primary"
    >
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse navigation" : "Expand navigation"}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d={expanded ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Suspense fallback={<ul className={styles.list} />}>
        <NavList items={items} onNavigate={() => setExpanded(false)} />
      </Suspense>
    </nav>
  );
}
