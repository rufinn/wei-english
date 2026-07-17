"use client";

import Link from "next/link";
import { Anton, Playfair_Display } from "next/font/google";
import { SLIDES_MAP } from "@/app/_data/tenses";
import { RELATIVE_CLAUSES_SLIDES_MAP } from "@/app/_data/relative_clauses";
import styles from "./content.module.css";

const titleFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

const subtitleFont = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  variable: "--font-subtitle",
});

export interface ContentTemplateProps {
  /** Display heading. Defaults to "CONTENTS". */
  heading?: string;
  /** Italic strapline under the heading. Omit to hide. */
  subtitle?: string;
  /** Overrides the default background color. */
  backgroundColor?: string;
}

/** The slide maps a viewer can switch between. */
const SOURCES = [
  {
    id: "tenses",
    label: "English Tenses",
    href: `/preview/cover?slug=tenses-content`,
    map: SLIDES_MAP,
  },
  {
    id: "relative-clauses",
    label: "Relative Clauses",
    href: `/preview/cover?slug=rel-clauses-content`,
    map: RELATIVE_CLAUSES_SLIDES_MAP,
  },
] as const;

export default function ContentTemplate({
  heading = "CONTENTS",
  subtitle,
  backgroundColor,
}: ContentTemplateProps) {
  return (
    <section
      className={`${styles.content} ${titleFont.variable} ${subtitleFont.variable}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <header className={styles.header}>
        <h1 className={styles.heading}>{heading}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>

      <ol className={styles.list}>
        {SOURCES.map((s, index) => (
          <li
            key={s.id}
            className={styles.item}
            style={{ "--i": index } as React.CSSProperties}
          >
            <Link href={s.href} className={styles.link}>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.label}>{s.label}</span>
              <span className={styles.sourceCount}>{s.map.length}</span>
              <span className={styles.rule} aria-hidden="true" />
              <svg
                className={styles.arrow}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
