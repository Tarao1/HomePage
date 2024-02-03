import styles from "../styles/about_detail.module.css";
import imagePath1 from "../images/about1.jpg";
import imagePath2 from "../images/about2.jpg";
import imagePath3 from "../images/about3.jpg";
import imagePath4 from "../images/about4.jpg";
import imagePath5 from "../images/about5.jpg";
import Image from "next/image";

export default function AboutDetail({
  no,
  title,
  descript,
  direction,
  imageNo,
}: {
  no: string;
  title: string;
  descript: string;
  direction: number;
  imageNo: number;
}) {
  var imagePath = imagePath1;
  switch (imageNo) {
    case 2:
      imagePath = imagePath2;
      break;
    case 3:
      imagePath = imagePath3;
      break;
    case 4:
      imagePath = imagePath4;
      break;
    case 5:
      imagePath = imagePath5;
      break;
  }
  if (direction === 1) {
    // 左揃え
    return (
      <div className={styles.container}>
        <div className={styles.number_box_left}>
          <p className={styles.number_box_subTitle}>Point</p>
          <p className={styles.number_box_no}>{no}</p>
        </div>
        <div className={styles.image_left}>
          <Image
            src={imagePath}
            alt=""
            layout="responsive"
            width={100}
            height={100}
          />
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
          <Image
            src={imagePath}
            alt=""
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <h2 className={styles.title_right}>{title}</h2>
        <p className={styles.p_right}>{descript}</p>
      </div>
    );
  }
}
