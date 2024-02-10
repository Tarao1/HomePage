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
          imageNo={1}
        ></AboutDetail>
        <AboutDetail
          no="02"
          title="半個室のプライベート空間"
          descript="全席カーテンで仕切られた半個室となっており、他のお客様の目を気にせずご相席をお楽しみいただけます。"
          direction={2}
          imageNo={2}
        ></AboutDetail>
        <AboutDetail
          no="03"
          title="完全会員制 "
          descript="完全会員制を採用しており、会員登録・入店時に身分証明書による本人確認を実施しております。規約違反やマナー違反の報告があったお客様は、次回以降のご利用をお断りしております。"
          direction={1}
          imageNo={3}
        ></AboutDetail>
        <AboutDetail
          no="04"
          title="独自のマッチングシステム"
          descript="独自のシステムにより、相席相手を自動決定しており、一度相席した相手とは再び相席しない仕組みになっております。"
          direction={2}
          imageNo={4}
        ></AboutDetail>
        <AboutDetail
          no="05"
          title="シンプルな料金体系"
          descript="女性は完全無料！男性は利用回数×2000円（税込）となります。席料・チャージ料・登録料など利用料金以外の料金は一切発生しません。相席をしていない時間は、無料でご利用いただけます。"
          direction={1}
          imageNo={5}
        ></AboutDetail>
      </div>
    </div>
  );
}
