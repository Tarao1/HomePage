import Link from "next/link";
import styles from "../styles/button.module.css";

export default function Button({ url }: { url: string }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonRound}>
        <Link href={url} target="_blank">
          More
        </Link>
      </div>
    </div>
  );
}
