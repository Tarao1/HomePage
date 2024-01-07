import Link from "next/link";
import styles from "../styles/button.module.css";

export default function Button() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonRound}>
        <Link href="#">More</Link>
      </div>
    </div>
  );
}
