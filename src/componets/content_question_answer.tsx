import styles from "../styles/content.module.css";
import QaItem from "./qa_item";
import Button from "./button";

export default function ContentQuestionAnswer() {
  return (
    <div className={styles.flexContainer_green}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>Q&A</h1>
        <QaItem
          qustion="予約なしでも利用可能ですか？"
          answer="予約に関してましては必須ではございませんが、混雑時はご予約のお客様優先でのご案内となります。また、初回限定の割引など予約限定のサービスがございますので、ご予約のうえでのご来店をおすすめしております。"
        />
        <QaItem
          qustion="相席相手を選ぶことは可能ですか？"
          answer="ご相席相手については、当社のシステムで決定しておりますので指定はできません。"
        />
        <QaItem
          qustion="相席した相手の連絡先を教えてもらえますか？"
          answer="連絡先の交換は、ご相席中にお客様ご自身の責任でお願いしております。スタッフが相席いただいたお相手の連絡先/個人情報を提供することは一切ありませんので、ご了承ください。"
        />
        <QaItem
          qustion="以前に相席した相手と再度相席することはありますか？"
          answer="当店では独自のシステムにより、一度相席したお相手とは相席とならない仕組みを取っております。"
        />
        <Button url="https://fimit-official.com/%e3%82%88%e3%81%8f%e3%81%82%e3%82%8b%e8%b3%aa%e5%95%8f/" />
      </div>
    </div>
  );
}
