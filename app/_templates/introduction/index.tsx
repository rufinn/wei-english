import { Playfair_Display, Nunito } from "next/font/google";
import Card from "@/app/_components/Card";
import styles from "./introduction.module.css";

const headlineFont = Playfair_Display({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-headline",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

export interface IntroductionTemplateProps {
  /** Course name, rendered as the headline. */
  courseTitle: string;
  /** Overview paragraph, one entry per line. */
  overview: string[];
  /** Course tutor's name. */
  tutorName: string;
  /** Formatted course price, e.g. "$149". */
  price: string;
  /** Optional unit shown next to the price, e.g. "/ 8-week course". */
  priceUnit?: string;
  /** Overrides the default background color. */
  backgroundColor?: string;
  /** Overrides the default divider color. */
  dividerColor?: string;
  /** Called when the back button is clicked. Omit to hide the button. */
  onBack?: () => void;
  /** Called when the next button is clicked. Omit to hide the button. */
  onNext?: () => void;
}

export default function IntroductionTemplate({
  courseTitle,
  overview,
  tutorName,
  price,
  priceUnit,
  backgroundColor,
  dividerColor,
  onBack,
  onNext,
}: IntroductionTemplateProps) {
  return (
    <section
      className={`${styles.introduction} ${headlineFont.variable} ${bodyFont.variable}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <h1 className={styles.headline}>{courseTitle}</h1>

      <hr
        className={styles.divider}
        style={dividerColor ? { background: dividerColor } : undefined}
      />

      <p className={styles.overview}>
        {overview.map((line, index) => (
          <span
            key={`${index}-${line}`}
            className={styles.overviewLine}
            style={{ "--i": index } as React.CSSProperties}
          >
            {line}
          </span>
        ))}
      </p>

      <div className={styles.details}>
        <Card label="TUTOR" lines={[tutorName]} />
        <Card
          label="PRICE"
          lines={[priceUnit ? `${price} ${priceUnit}` : price]}
        />
      </div>

      {onBack && (
        <button
          type="button"
          className={styles.backButton}
          aria-label="Back"
          onClick={onBack}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M19 12H5M11 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {onNext && (
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
      )}
    </section>
  );
}
