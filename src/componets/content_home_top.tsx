import styles from "../styles/content_home_top.module.css";
import Image from "next/image";
import topImage from "../images/home-top.jpeg";

export default function ContentHomeTop() {
  return (
    <div>
      <figure>
        <Image src={topImage} alt="" layout="responsive" />
      </figure>
      <table className={styles.table}>
        <thead className={styles.thead}>
          S
          <tr>
            <th className={styles.th} colSpan={2}>
              来店状況
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td2}>Men</td>
            <td className={styles.td1}>Women</td>
          </tr>
          <tr>
            <td className={styles.td2}>20名</td>
            <td className={styles.td1}>17名</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
