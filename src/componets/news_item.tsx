import styles from "../styles/news_item.module.css";
import Link from "next/link";

export default function NewsItem({
  date,
  title,
  url,
}: {
  date: string;
  title: string;
  url: string;
}) {
  return (
    <div className={styles.wrapper}>
      <Link href={url} target="_blank">
        <span className={styles.date}>{date}</span>
        <p className={styles.title}>{title}</p>
      </Link>
    </div>
  );
}
