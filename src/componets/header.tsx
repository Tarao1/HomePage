import Container from "./container";
import styles from "../styles/header.module.css";
import React from "react";
import Button from "./button";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}></div>
      </Container>
    </header>
  );
}
