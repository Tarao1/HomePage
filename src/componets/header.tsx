import Nav from "./nav";
import Logo from "./logo";
import LinkButton from "./link_button";
import Container from "./container";
import styles from "../styles/header.module.css";
import React, { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <LinkButton title="予約はこちら" url="/" />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
