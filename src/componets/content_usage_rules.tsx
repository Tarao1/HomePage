import styles from "../styles/content.module.css";
import topImage from "../images/usage_rules.png";
import Image from "next/image";
import Link from "next/link";

export default function ContentUsageRules() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>利用方法</h1>
        <Image
          src={topImage}
          alt=""
          layout="responsive"
          className={styles.largeImage}
        />
        <Link
          href="https://www.youtube.com/watch?v=2u_kHW4txFA"
          target="_blank"
        >
          <p className={styles.linkText}>利用方法動画はコチラ</p>
        </Link>
      </div>
    </div>
  );
}
