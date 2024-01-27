import styles from "../styles/content.module.css";
import topImage from "../images/usage_rules.png";
import Image from "next/image";

export default function ContentUsageRules() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>利用方法</h1>
        <figure className={styles.largeImage}>
          <Image src={topImage} alt="" layout="responsive" />
        </figure>
        <p>利用方法動画はコチラ</p>
      </div>
    </div>
  );
}
