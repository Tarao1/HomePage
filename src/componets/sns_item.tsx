import Image from "next/image";
import styles from "../styles/sns_item.module.css";
import src from "../images/youtube_icon.jpeg";

export default function SnsItem({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span className={styles.span}>{title}</span>
      </div>
      <Image src={src} alt={imageSrc} className={styles.image}></Image>
    </div>
  );
}
