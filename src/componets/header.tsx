import Nav from "./nav";
import Logo from "./logo";
import LinkButton from "./link_button";
import Container from "./container";
import styles from "../styles/header.module.css";
import React from "react";

export default function Header() {
  // if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
  // スマホ
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <LinkButton title="予約はこちら" url="/" />
        </div>
      </Container>
    </header>
  );
  // } else {
  // PC
  // return (
  //   <header className={styles.wrapper}>
  //     <Container large>
  //       <div className={styles.flexContainer}>
  //         <Logo />
  //         <LinkButton title="予約はこちら" url="/" />
  //         <Nav />
  //       </div>
  //     </Container>
  //   </header>
  // );
  // }
}
