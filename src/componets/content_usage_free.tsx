import styles from "../styles/content.module.css";
import styles2 from "../styles/content_usage_free.module.css";

export default function ContentUsageFree() {
  return (
    <div className={styles.flexContainer_green}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>利用料金</h1>
        <div className={styles2.boxMen}>
          <h2 className={styles2.boxMenTitle}>Men</h2>
          <div className={styles2.wrapper}>
            <div className={styles2.title}>
              <span>基本料金</span>
            </div>
            <div className={styles2.content}>
              <p>相席1回 20分 2,000円(税込)</p>
            </div>
          </div>
          <div className={styles2.wrapper}>
            <div className={styles2.title}>
              <span>初回利用時(予約限定)</span>
            </div>
            <div className={styles2.content}>
              <p>相席2回 40分 2,000円(税込)</p>
            </div>
          </div>
          <p className={styles2.description}>
            ※ご相席頂いていないお時間につきましては、料金が発生いたしません。
          </p>
          <p className={styles2.description}>
            ※ドリンク飲み放題サービスが含まれます。
          </p>
        </div>
        <div className={styles2.boxWomen}>
          <h2 className={styles2.boxWomenTitle}>Women</h2>
          <div className={styles2.wrapper}>
            <div className={styles2.title}>
              <span>基本料金</span>
            </div>
            <div className={styles2.content}>
              <p>完全無料</p>
            </div>
          </div>
          <p className={styles2.description}>
            ※ドリンク飲み放題サービスが含まれます。
          </p>
        </div>
      </div>
    </div>
  );
}
