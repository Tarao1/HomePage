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
          answer="ご利用いただけます。満席時は、ご予約のお客様優先でご案内させていただきます。"
        />
        <QaItem
          qustion="予約なしでも利用可能ですか？"
          answer="ご利用いただけます。満席時は、ご予約のお客様優先でご案内させていただきます。"
        />
        <QaItem
          qustion="予約なしでも利用可能ですか？"
          answer="ご利用いただけます。満席時は、ご予約のお客様優先でご案内させていただきます。"
        />
        <QaItem
          qustion="予約なしでも利用可能ですか？"
          answer="ご利用いただけます。満席時は、ご予約のお客様優先でご案内させていただきます。"
        />
        <Button />
      </div>
    </div>
  );
}
