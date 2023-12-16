import styles from "../styles/content_about_fimit.module.css";
import LinkButton from "./link_button";

export default function ContentAboutFimit() {
  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.title}>FiMiTとは</h1>
      <h1 className={styles.subtitle}>Point01</h1>
      <h2 className={styles.subtitle}>1対1に特化した相席店</h2>
      <p className={styles.text}>
        お一人様で利用できるため、友人と予定を合わせる手間もなく、気軽に異性とお話することができます。
      </p>
      <h1 className={styles.subtitle}>Point02</h1>
      <h2 className={styles.subtitle}>半個室のプライベート空間</h2>
      <p className={styles.text}>
        全席カーテンで仕切られた半個室となっており、他のお客様の目を気にせずご相席をお楽しみいただけます。
      </p>
      <h1 className={styles.subtitle}>Point03</h1>
      <h2 className={styles.subtitle}>半個室のプライベート空間</h2>
      <p className={styles.text}>
        全席カーテンで仕切られた半個室となっており、他のお客様の目を気にせずご相席をお楽しみいただけます。
      </p>
      <LinkButton title="More" url="/news"></LinkButton>
    </div>
  );
}
