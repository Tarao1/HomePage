import Link from "next/link";
import Image from "next/image";
import logoImage from "../images/header_logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <figure>
        <Image src={logoImage} alt="FiMitロゴ" />
      </figure>
    </Link>
  );
}
