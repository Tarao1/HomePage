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
              <Link
                href="https://fimit-official.com/user-policy/"
                target="_blank"
              >
                <span>利用規約</span>
              </Link>
              <Link
                href="https://fimit-official.com/%e5%80%8b%e4%ba%ba%e6%83%85%e5%a0%b1%e4%bf%9d%e8%ad%b7/"
                target="_blank"
              >
                <span>個人情報保護方針</span>
              </Link>
              <Link
                href="https://fimit-official.com/privacy-policy/"
                target="_blank"
              >
                <span>プライバシーポリシー</span>
              </Link>
              <Link
                href="https://fimit-official.com/%e6%83%85%e5%a0%b1%e3%82%bb%e3%82%ad%e3%83%a5%e3%83%aa%e3%83%86%e3%82%a3%e3%83%9d%e3%83%aa%e3%82%b7%e3%83%bc-2/"
                target="_blank"
              >
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
