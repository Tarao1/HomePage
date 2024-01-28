import styles from "../styles/news_item.module.css";

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
      <span className={styles.date}>{date}</span>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
