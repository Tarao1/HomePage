import styles from "../styles/content.module.css";
import AboutDetail from "./about_detail";

export default function ContentAboutFimit() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>FiMiTとは</h1>
        <AboutDetail
          no="01"
          title="1対1に特化した相席店"
          descript="お一人様で利用できるため、友人と予定を合わせる手間もなく、気軽に異性とお話することができます。"
          direction={1}
        ></AboutDetail>
        <AboutDetail
          no="02"
          title="半個室のプライベート空間"
          descript="全席カーテンで仕切られた半個室となっており、他のお客様の目を気にせずご相席をお楽しみいただけます。"
          direction={2}
        ></AboutDetail>
        <AboutDetail
          no="03"
          title="半個室のプライベート空間"
          descript="全席カーテンで仕切られた半個室となっており、他のお客様の目を気にせずご相席をお楽しみいただけます。"
          direction={1}
        ></AboutDetail>
        <AboutDetail
          no="04"
          title="半個室のプライベート空間"
          descript="全席カーテンで仕切られた半個室となっており、他のお客様の目を気にせずご相席をお楽しみいただけます。"
          direction={2}
        ></AboutDetail>
      </div>
    </div>
  );
}
