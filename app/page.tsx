import Main from "@/components/Main";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.backgroundGradients} />
      <Main />
    </div>
  );
}
