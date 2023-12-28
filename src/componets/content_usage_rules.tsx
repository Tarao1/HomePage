import styles from "../styles/content.module.css";
import topImage from "../images/home-top.jpeg";
import Image from "next/image";

export default function ContentUsageRules() {
  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.title}>利用方法</h1>
      <figure className={styles.largeImage}>
        <Image src={topImage} alt="" layout="responsive" />
      </figure>
    </div>
  );
}
