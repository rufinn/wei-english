import styles from "./scoreCard.module.css";

/** Per-question outcome, one entry per slot in display order. */
export type ScoreCardStatus = "correct" | "incorrect" | "unanswered";

export interface ScoreCardProps {
  /** Outcome for each question, in order. Drives the row of dots. */
  statuses: ScoreCardStatus[];
  /** Index of the question in view — its dot gets the focus ring. */
  currentIndex?: number;
  /**
   * Total number of slots to render. Defaults to `statuses.length`;
   * pass a larger value to show not-yet-reached questions as empty dots.
   */
  total?: number;
  /**
   * Caption above the dots. Receives the correct count and total.
   * Defaults to the "Your card — N of M correct" line.
   */
  label?: (correct: number, total: number) => string;
  /**
   * Called with a question's index when its dot is clicked. When provided,
   * dots render as buttons so the card doubles as a jump-to navigator.
   */
  onSelect?: (index: number) => void;
}

const defaultLabel = (correct: number, total: number) =>
  `Your card — ${correct} of ${total} correct`;

export default function ScoreCard({
  statuses,
  currentIndex,
  total = statuses.length,
  label = defaultLabel,
  onSelect,
}: ScoreCardProps) {
  const correctCount = statuses.filter((s) => s === "correct").length;

  return (
    <div className={styles.scorecard}>
      <div className={styles.scoreLbl}>{label(correctCount, total)}</div>
      <div className={styles.dots}>
        {Array.from({ length: total }).map((_, i) => {
          const status = statuses[i];
          const done = status != null && status !== "unanswered";
          const ok = status === "correct";
          const className = [
            styles.dot,
            done ? (ok ? styles.dotOn : styles.dotMiss) : "",
            i === currentIndex ? styles.dotCurrent : "",
          ]
            .filter(Boolean)
            .join(" ");

          if (!onSelect) {
            return <span key={i} className={className} />;
          }

          return (
            <button
              key={i}
              type="button"
              className={className}
              aria-label={`Go to question ${i + 1}`}
              aria-current={i === currentIndex ? "true" : undefined}
              onClick={() => onSelect(i)}
            />
          );
        })}
      </div>
    </div>
  );
}
