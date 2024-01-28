import styles from "../styles/content.module.css";
import NewsItem from "./news_item";
import Button from "./button";

export default function ContentSnsNews() {
  return (
    <div className={styles.flexContainer_green}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>News</h1>
        <NewsItem
          date="2024.01.28"
          title="お誕生日特典のお知らせ"
          url="https://fimit-official.com/2024/01/28/%e3%81%8a%e8%aa%95%e7%94%9f%e6%97%a5%e7%89%b9%e5%85%b8%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/"
        />
        <NewsItem
          date="2023.12.26"
          title="年末年始のお知らせ"
          url="https://fimit-official.com/2023/12/26/%e5%b9%b4%e6%9c%ab%e5%b9%b4%e5%a7%8b%e3%81%ae%e5%96%b6%e6%a5%ad%e6%99%82%e9%96%93%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/"
        />
        <NewsItem
          date="2023.11.26"
          title="利用規約改定のお知らせ(2023年12月1日から適用)"
          url="https://fimit-official.com/2023/11/26/%e5%88%a9%e7%94%a8%e8%a6%8f%e7%b4%84%e6%94%b9%e5%ae%9a%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b-2023%e5%b9%b412%e6%9c%881%e6%97%a5%e3%81%8b%e3%82%89%e9%81%a9%e7%94%a8/"
        />
        <Button url="https://fimit-official.com/news-list/" />
      </div>
    </div>
  );
}
