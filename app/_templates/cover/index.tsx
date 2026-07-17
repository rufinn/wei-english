"use client";

import { Anton, Playfair_Display } from "next/font/google";
import styles from "./cover.module.css";
import TypingText from "@/app/_components/TypingText";

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

  coverLists?: {
    "listTitle": string;
    "listItems": string[];
  }[];

  /** Rich content rendered below the scroll label. */
  coverContent?: {
    type: "list";
    listTitle: string;
    listItems: string[];
  }[];
}

export default function CoverTemplate({
  navLinks,
  titleLines,
  subtitle,
  scrollLabel = "SCROLL",
  footerText,
  backgroundColor,
  onNext,
  coverContent
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

        <p className={`unrollLeft ${styles.subtitle}`}>{subtitle}</p>

        <span className={styles.scroll}>
          <span className={styles.scrollLine} />
          <TypingText text={scrollLabel} startDelay={4.8} />
        </span>

        {coverContent && coverContent.length > 0 ? (
          <div className={styles.coverContent}>
            {coverContent.map((item, index) => (
              <div key={`${index}-${item.listTitle}`} className={styles.contentList}>
                <p className={styles.contentListTitle}>{item.listTitle}</p>
                <ul className={styles.contentListItems}>
                  {item.listItems.map((listItem) => (
                    <li key={listItem}>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
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
