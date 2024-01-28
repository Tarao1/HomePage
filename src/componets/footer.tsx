import styles from "../styles/footer.module.css";
import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <div className={styles.item_wrapper}>
            <div className={styles.content}>
              <Link href="https://fimit-official.com/inquiry/" target="_blank">
                <span>お問い合わせ</span>
              </Link>
              <Link href="https://fimit-corporate.com/" target="_blank">
                <span>会社概要</span>
              </Link>
              <Link href="/terms">
                <span>利用規約</span>
              </Link>
              <Link href="#">
                <span>個人情報保護方針</span>
              </Link>
              <Link href="#">
                <span>プライバシーポリシー</span>
              </Link>
              <Link href="#">
                <span>セキュリティポリシー</span>
              </Link>
            </div>
          </div>
          <p>FIMIT 2022-2024</p>
        </div>
      </Container>
    </footer>
  );
}
