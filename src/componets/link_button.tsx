import Link from "next/link";
import styles from "../styles/link_button.module.css";

export default function LinkButton({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <div className={styles.wrapper}>
      <Link href={url} className={styles.linkButton}>
        {title}
      </Link>
    </div>
  );
}
