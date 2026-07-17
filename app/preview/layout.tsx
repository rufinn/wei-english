import NavBar from "../_components/NavBar";
import { SLIDES_MAP } from "../_data/tenses";
import { RELATIVE_CLAUSES_SLIDES_MAP } from "../_data/relative_clauses";
import styles from "./layout.module.css";

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.shell}>
      <NavBar maps={[SLIDES_MAP, RELATIVE_CLAUSES_SLIDES_MAP]} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
