import Image from "next/image";
import imagePicture from "../images/home-top.jpeg";
import styles from "../styles/card.module.css";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.main}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
        <Image
          className={styles.image}
          src={imagePicture}
          alt="Sunset in the mountains"
        ></Image>
        <div className="px-6 py-4">
          <div className={styles.title}>{title}</div>
          <p className={styles.text}>{description}</p>
        </div>
      </div>
    </div>
  );
}
