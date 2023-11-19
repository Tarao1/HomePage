import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">FiMiTとは</Link>
        </li>
        <li>
          <Link href="/">利用料金</Link>
        </li>
        <li>
          <Link href="/">利用方法</Link>
        </li>
        <li>
          <Link href="/">よくある質問</Link>
        </li>
        <li>
          <Link href="/">店舗概要</Link>
        </li>
      </ul>
    </nav>
  );
}
