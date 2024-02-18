import styles from "../styles/content.module.css";
import CampaignItem from "./campaign-item";

export default function ContentCampaign() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.flexLeftContainer}>
          <CampaignItem
            url="https://fimit-official.com/2023/07/16/%e3%80%90%e5%a5%b3%e6%80%a7%e9%99%90%e5%ae%9a%e3%80%91500%e5%86%86%e5%88%86%e3%81%ae%e3%82%b3%e3%83%bc%e3%83%92%e3%83%bc%e3%83%81%e3%82%b1%e3%83%83%e3%83%88%e3%83%97%e3%83%ac%e3%82%bc%e3%83%b3/"
            pathType={2}
          />
          <CampaignItem
            url="https://fimit-official.com/2024/01/28/%e3%81%8a%e8%aa%95%e7%94%9f%e6%97%a5%e7%89%b9%e5%85%b8%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/"
            pathType={1}
          />
        </div>
      </div>
    </div>
  );
}
