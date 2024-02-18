import styles from "../styles/campaign-item.module.css";
import Image from "next/image";
import imagePath from "../images/birthday-campain.png";
import imagePath2 from "../images/coffee-ticket-campain.png";
import Link from "next/link";

export default function CampaignItem({
  url,
  pathType,
}: {
  url: string;
  pathType: number;
}) {
  var path = imagePath;
  if (pathType === 2) {
    path = imagePath2;
  }
  return (
    <div className={styles.wrapper}>
      <Link href={url} target="_blank">
        <Image src={path} alt="" className={styles.image} />
      </Link>
    </div>
  );
}
