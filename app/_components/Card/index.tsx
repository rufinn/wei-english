import styles from "./card.module.css";

export interface CardProps {
  /** Small uppercase label above the divider, e.g. "FORMULA". */
  label: string;
  /** Formula lines, one entry per line. */
  lines?: string[];
  /** Overrides the default background color. */
  backgroundColor?: string;
  /** Overrides the default accent color (label + divider). */
  accentColor?: string;
  children?: React.ReactNode;
}

export default function Card({
  label,
  lines,
  backgroundColor,
  accentColor,
  children
}: CardProps) {
  return (
    <div
      className={styles.card}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <p className={styles.label} style={accentColor ? { color: accentColor } : undefined}>
        {label}
      </p>

      <hr
        className={styles.divider}
        style={accentColor ? { background: accentColor } : undefined}
      />

      { children }

    {
      lines && 
        <div className={styles.lines}>
        {lines.map((line, index) => (
          <p key={`${index}-${line}`} className={styles.line}>
            {line}
          </p>
        ))}
      </div>
    }
      
    </div>
  );
}
