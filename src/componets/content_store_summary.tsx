import styles from "../styles/content.module.css";
import styles2 from "../styles/store_summary.module.css";
import Link from "next/link";
import Image from "next/image";
import topImage from "../images/store-enter.jpeg";

export default function ContentStoreSummary() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>店舗概要</h1>
        <div className={styles2.wrapper}>
          <div className={styles2.title}>
            <span>営業時間</span>
          </div>
          <div className={styles2.content}>
            <p>[平日] 18:30 - 23:00</p>
            <p>[土日・祝日] 15:00 - 23:30</p>
          </div>
        </div>
        <div className={styles2.wrapper}>
          <div className={styles2.title}>
            <span>定休日</span>
          </div>
          <div className={styles2.content}>
            <p>火曜日、木曜日</p>
          </div>
        </div>
        <div className={styles2.wrapper}>
          <div className={styles2.title}>
            <span>座席数</span>
          </div>
          <div className={styles2.content}>
            <p>22席</p>
          </div>
        </div>
        <div className={styles2.wrapper}>
          <div className={styles2.title}>
            <span>住所</span>
          </div>
          <div className={styles2.content}>
            <p>東京都台東区上野2-6-12 東天紅上野広小路ビル5F</p>
            <Image
              src={topImage}
              layout="responsive"
              alt=""
              className={styles.largeImage}
            ></Image>
            <Link
              href="https://www.google.co.jp/maps/place/%E7%9B%B8%E5%B8%AD%E5%B1%85%E9%85%92%E5%B1%8BFIMIT%EF%BC%88%E3%83%95%E3%82%A3%E3%83%9F%E3%83%83%E3%83%88%EF%BC%89%E4%B8%8A%E9%87%8E%E5%BA%97+1on1%E7%9B%B8%E5%B8%AD%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8/@35.7085916,139.770399,17z/data=!3m2!4b1!5s0x60188e9fd869fdd3:0x7306ffae7d0ce93e!4m6!3m5!1s0x60188f3ffe1d6369:0xa224bba9ce2f1b36!8m2!3d35.7085916!4d139.7729739!16s%2Fg%2F11tf4z443k?hl=ja&entry=ttu"
              target="_blank"
            >
              <p className={styles.linkText}>GoogleMapで開く</p>
            </Link>
          </div>
        </div>
        <div className={styles2.wrapper}>
          <div className={styles2.title}>
            <span>アクセス</span>
          </div>
          <div className={styles2.content}>
            <p>都営大江戸線/上野御徒町駅 A3出口からすぐ</p>
            <p>東京メトロ銀座線/上野広小路駅 A3出口からすぐ</p>
            <p>JR山手線/御徒町駅 徒歩3分</p>
            <p>JR山手線/上野駅 徒歩5分</p>
          </div>
        </div>
      </div>
    </div>
  );
}
