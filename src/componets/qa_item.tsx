import styles from "../styles/qa_item.module.css";

export default function QaItem({
  qustion,
  answer,
}: {
  qustion: string;
  answer: string;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.question}>
        <p>Q.{qustion}</p>
      </div>
      <div className={styles.border} />
      <div className={styles.answer}>
        <p>A.{answer}</p>
      </div>
    </div>
  );
}
