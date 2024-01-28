import styles from "../../styles/content.module.css";
import Container from "../../componets/container";

export default function Terms() {
  return (
    <Container large={false}>
      <div className={styles.flexContainer}>
        <div className={styles.mainContainer}>
          <span>『FIMIT』利用規約</span>
          <p>第4版</p>
          <p>発効日：2023年12月 1日</p>
          <p className={styles.text}>【会員登録】</p>
          <p>当店は1対1専用の相席ラウンジになります。</p>
          <p>
            お客様にご安心してご利用いただけるよう、完全登録制となっております。
          </p>
          <p>
            登録内容に虚偽の内容があった場合は、会員資格をはく奪する場合がございます。
          </p>
          <p>
            登録内容に変更があった場合は、サービスご利用前にお申し付けください。
          </p>
          <p className={styles.text}>【予約について】</p>
          <p>ご予約のお客様を優先してご案内いたしております。</p>
          <p>
            お客様のご都合によりご予約をキャンセルされる場合は、ご連絡いただきますようお願いいたします。
          </p>
          <p>
            無断キャンセル等は、次回以降のご利用に制限を設けさせていただく場合がございますのでご了承ください。
          </p>
          <p>
            ご予約は「席予約」の扱いになりますので、店内状況によっては相席のご案内ができない場合がございますのでご了承ください。
          </p>
          <p className={styles.text}>【利用料金】</p>
          <p>・男性ご利用料金：</p>
          <p>ご相席１回　20分　2,000円（税込）</p>
          <p>・女性ご利用料金：</p>
          <p>無料</p>
          <p className={styles.text}>【ドリンクサービス】</p>
        </div>
      </div>
    </Container>
  );
}
