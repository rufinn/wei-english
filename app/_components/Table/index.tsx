import styles from "./table.module.css";

export interface TableProps {
  /** Header row cells; its length determines the number of columns. */
  headers: string[];
  /** Value rows, one array of cells per row. */
  rows: React.ReactNode[][];
  /** Overrides the default background color. */
  backgroundColor?: string;
  /** Overrides the default accent color (header text + divider). */
  accentColor?: string;
  className?: string;
}

export default function Table({
  headers,
  rows,
  backgroundColor,
  accentColor,
  className = ""
}: TableProps) {
  return (
    <table
      className={`${styles.table} ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={`${index}-${header}`}
              className={styles.headerCell}
              style={accentColor ? { color: accentColor, borderBottomColor: accentColor } : undefined}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.row}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.cell}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
