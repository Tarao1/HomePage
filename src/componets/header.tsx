import Container from "./container";
import styles from "../styles/header.module.css";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconImage from "../images/menu_icon.png";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <div
            className={!openMenu ? styles.button_menu : styles.display_none}
            onClick={menuFunction}
          >
            <Image className={styles.image} src={IconImage} alt="menu"></Image>
          </div>
        </div>
      </Container>
      <div className={openMenu ? styles.menu_wrapper : styles.display_none}>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/">FiMiTとは</Link>
        </p>
        <p>
          <Link href="/">利用料金</Link>
        </p>
        <p>
          <Link href="/">利用方法</Link>
        </p>
        <p>
          <Link href="/">よくある質問</Link>
        </p>
        <p>
          <Link href="/">店舗概要</Link>
        </p>
        <div
          className={openMenu ? undefined : styles.display_none}
          onClick={menuFunction}
        >
          <p>[X]閉じる</p>
        </div>
      </div>
    </header>
  );
}
