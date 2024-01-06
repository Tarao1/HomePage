import styles from "../styles/content.module.css";
import LinkButton from "./link_button";

export default function ContentCsutomerTestimonials() {
  return (
    <div className={styles.flexContainer_green}>
      <h1 className={styles.title}>お客様の声</h1>
      <LinkButton title="More >" url="/"></LinkButton>
    </div>
  );
}
