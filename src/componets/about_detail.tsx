import styles from "../styles/about_detail.module.css";

export default function AboutDetail({
  no,
  title,
  descript,
}: {
  no: string;
  title: string;
  descript: string;
}) {
  return (
    <div>
      <div className={styles.box}>{no}</div>
      <h2 className={styles.title}>{title}</h2>
      <p>{descript}</p>
    </div>
  );
}
