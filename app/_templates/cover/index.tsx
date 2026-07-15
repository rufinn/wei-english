"use client";

import { Anton, Playfair_Display } from "next/font/google";
import styles from "./cover.module.css";

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

export interface CoverTemplateProps {
  /** Top-right nav labels, e.g. ["ABOUT", "JOIN"]. Omit to hide the nav. */
  navLinks?: string[];
  /** Headline, one entry per line. */
  titleLines: string[];
  /** Italic strapline under the headline. */
  subtitle: string;
  /** Short list of highlights rendered with a diamond bullet. Omit to hide the list. */
  bullets?: string[];
  /** Label next to the scroll indicator. Defaults to "SCROLL". */
  scrollLabel?: string;
  /** Bottom-left caption, e.g. "EVERY WEDNESDAY — TAIPEI". */
  footerText: string;
  /** Overrides the default background color. */
  backgroundColor?: string;
  /** Called when the bottom-right button is clicked, to advance to the next screen. */
  onNext?: () => void;
}

export default function CoverTemplate({
  navLinks,
  titleLines,
  subtitle,
  bullets,
  scrollLabel = "SCROLL",
  footerText,
  backgroundColor,
  onNext,
}: CoverTemplateProps) {
  return (
    <section
      className={`${styles.cover} ${titleFont.variable} ${subtitleFont.variable}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {navLinks && navLinks.length > 0 ? (
        <nav className={styles.nav} aria-label="Primary">
          {navLinks.map((link, index) => (
            <span
              key={link}
              className={styles.navLink}
              style={{ "--i": index } as React.CSSProperties}
            >
              {link}
            </span>
          ))}
        </nav>
      ) : (
        <div />
      )}

      <div className={styles.content}>
        <h1 className={styles.title}>
          {titleLines.map((line, index) => (
            <span
              key={`${index}-${line}`}
              className={styles.titleLine}
              style={{ "--i": index } as React.CSSProperties}
            >
              {line}
            </span>
          ))}
        </h1>

        <p className={styles.subtitle}>{subtitle}</p>

        <span className={styles.scroll}>
          <span className={styles.scrollLine} />
          {scrollLabel}
        </span>

        {bullets &&
          <ul className={styles.bullets}>
            {bullets.map((bullet, index) => (
              <li key={bullet} style={{ "--i": index } as React.CSSProperties}>
                {bullet}
              </li>
            ))}
          </ul>
        }

      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>{footerText}</p>
      </div>

      <button
        type="button"
        className={styles.nextButton}
        aria-label="Next"
        onClick={onNext}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
