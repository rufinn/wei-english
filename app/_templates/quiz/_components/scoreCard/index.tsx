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
}

const defaultLabel = (correct: number, total: number) =>
  `Your card — ${correct} of ${total} correct`;

export default function ScoreCard({
  statuses,
  currentIndex,
  total = statuses.length,
  label = defaultLabel,
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
          return (
            <span
              key={i}
              className={[
                styles.dot,
                done ? (ok ? styles.dotOn : styles.dotMiss) : "",
                i === currentIndex ? styles.dotCurrent : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}
