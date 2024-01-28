import styles from "../styles/content.module.css";
import Image from "next/image";
import topImage from "../images/SiteTop.jpeg";
import logoImage from "../images/clear_logo.png";

export default function ContentHomeTop() {
  return (
    <div>
      <div className={styles.topImageContainer}>
        <Image className={styles.topImage} src={topImage} alt="" />
        <p className={styles.topImageText1}>1 on 1</p>
        <p className={styles.topImageText2}>Matching Lounge</p>
        <Image className={styles.topLogoImage} src={logoImage} alt="" />
        <p className={styles.topImageText3}>素敵な出会いがあなたを待っている</p>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
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
            <td className={styles.td2}>0名</td>
            <td className={styles.td1}>0名</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
