import styles from "../styles/content_usage_free.module.css";
import LinkButton from "./link_button";
import Card from "./card";

export default function ContentUsageFree() {
  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.title}>利用料金</h1>
      <div className={styles.wrapper}>
        <h2 className={styles.subtitle_men}>Men</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.td_men}>基本料金</td>
              <td className={styles.td_men}>相席1回 20分 2,000円(税込)</td>
            </tr>
            <tr>
              <td className={styles.td_men}>初回利用時(予約限定)</td>
              <td className={styles.td_men}>相席2回 40分 2,000円(税込)</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.text}>
          ※ご相席頂いていないお時間につきましては、料金が発生いたしません。
        </p>
        <h2 className={styles.subtitle_women}>Women</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.td_women}>基本料金</td>
              <td className={styles.td_women}>完全無料</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Card
        title="キャンペーン"
        description="【女性限定】冬季特別キャンペーン開催"
      ></Card>
      <Card
        title="キャンペーン"
        description="【女性限定】冬季特別キャンペーン開催"
      ></Card>
      <Card
        title="キャンペーン"
        description="【女性限定】冬季特別キャンペーン開催"
      ></Card>
      <LinkButton title="Drink Menu >" url="/"></LinkButton>
    </div>
  );
}
