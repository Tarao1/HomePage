import styles from "../styles/about_detail.module.css";
import topImage from "../images/speak1.jpeg";
import topImage2 from "../images/speak2.jpeg";
import Image from "next/image";

export default function AboutDetail({
  no,
  title,
  descript,
  direction,
}: {
  no: string;
  title: string;
  descript: string;
  direction: number;
}) {
  if (direction === 1) {
    // 左揃え
    return (
      <div className={styles.container}>
        <div className={styles.number_box_left}>
          <p className={styles.number_box_subTitle}>Point</p>
          <p className={styles.number_box_no}>{no}</p>
        </div>
        <div className={styles.image_left}>
          <Image src={topImage} alt="" layout="responsive" />
        </div>
        <h2 className={styles.title_left}>{title}</h2>
        <p className={styles.p_left}>{descript}</p>
      </div>
    );
  } else {
    //   右揃え
    return (
      <div className={styles.container}>
        <div className={styles.number_box_right}>
          <p className={styles.number_box_subTitle}>Point</p>
          <p className={styles.number_box_no}>{no}</p>
        </div>
        <div className={styles.image_right}>
          <Image src={topImage2} alt="" layout="responsive" />
        </div>
        <h2 className={styles.title_right}>{title}</h2>
        <p className={styles.p_right}>{descript}</p>
      </div>
    );
  }
}
