import styles from "../styles/book-menu.module.css";
import Link from "next/link";

export default function BookMenu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <Link
          href="https://coubic.com/fimit/booking_pages#pageContent"
          target="_"
        >
          <span className={styles.title}>予約はこちら</span>
        </Link>
      </div>
    </div>
  );
}
