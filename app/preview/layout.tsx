import NavBar from "../_components/NavBar";
import { SLIDES_MAP } from "../_data/tenses";
import styles from "./layout.module.css";

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.shell}>
      <NavBar items={SLIDES_MAP} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
