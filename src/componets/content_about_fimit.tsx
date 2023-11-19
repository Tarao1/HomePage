import styles from "../styles/content.module.css";
import LinkButton from "./link_button";

export default function ContentAboutFimit() {
  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.title}>FiMiTとは</h1>
      <p className={styles.subtitle}>about fimit</p>
      <LinkButton title="More" url="/news"></LinkButton>
    </div>
  );
}
