import styles from "../styles/content.module.css";
import SnsItem from "./sns_item";
import NewsItem from "./news_item";
import Button from "./button";

export default function ContentSnsNews() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        {/* <h1 className={styles.title}>SNS</h1>
        <SnsItem imageSrc="../images/youtube_icon.jpeg" title="Instagram" />
        <SnsItem imageSrc="../images/youtube_icon.jpeg" title="TikTok" />
        <SnsItem imageSrc="../images/youtube_icon.jpeg" title="YouTube" /> */}
        <h1 className={styles.title}>News</h1>
        <NewsItem
          date="2023.12.10"
          title="年末年始の営業時間に関するお知らせ"
          url="#"
        />
        <NewsItem
          date="2023.12.22"
          title="クリスマスイベント開催のお知らせ"
          url="#"
        />
        <NewsItem
          date="2024.01.01"
          title="2024年もよろお願いいたします"
          url="#"
        />
        <Button url="https://fimit-official.com/news-list/" />
      </div>
    </div>
  );
}
