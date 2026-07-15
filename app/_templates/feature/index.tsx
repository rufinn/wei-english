import { Playfair_Display, Nunito } from "next/font/google";
import styles from "./feature.module.css";

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

export interface FeatureTemplateProps {
  /** Headline, one entry per line. */
  headlineLines: string[];
  /** Description, one entry per line. */
  description: string[];
  /** Overrides the default background color. */
  backgroundColor?: string;
  /** Overrides the default divider color. */
  dividerColor?: string;
  /** Called when the back button is clicked. Omit to hide the button. */
  onBack?: () => void;
  /** Called when the next button is clicked. Omit to hide the button. */
  onNext?: () => void;

  subtitle?: string;
  rightPanel?: React.ReactNode;
  bottomPanel?: React.ReactNode;
}

export default function FeatureTemplate({
  headlineLines,
  description,
  backgroundColor,
  dividerColor,
  onBack,
  onNext,
  subtitle,
  rightPanel,
  bottomPanel
}: FeatureTemplateProps) {
  return (
    <section
      className={`${styles.feature} ${headlineFont.variable} ${bodyFont.variable}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <section className={styles.topPanel}>
        <section className={styles.leftPanel}>
        <h1 className={styles.headline}>
          {headlineLines.map((line, index) => (
            <span
              key={`${index}-${line}`}
              className={styles.headlineLine}
              style={{ "--i": index } as React.CSSProperties}
            >
              {line}
            </span>
          ))}
        </h1>

        <hr
          className={styles.divider}
          style={dividerColor ? { background: dividerColor } : undefined}
        />

          {
            subtitle &&
              <p className={`unrollLeft ${styles.subtitle}`}>{subtitle}</p>
          }


        <p className={styles.description}>
          {description.map((line, index) => (
            <span
              key={`${index}-${line}`}
              className={`unrollLeft ${styles.descriptionLine}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              {line}
            </span>
          ))}
        </p>
        </section>

      {
        rightPanel &&
          <section className={styles.rightPanel}>
          { rightPanel }
        </section>
      }
      </section>

      {
        bottomPanel &&
          <section className={styles.bottomPanel}>
            { bottomPanel }
          </section>
      }
      

      
      <section className={styles.footer}>
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
    </section>
  );
}
