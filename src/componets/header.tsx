import Nav from "./nav";
import Logo from "./logo";
import LinkButton from "./link_button";
import Container from "./container";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
          <LinkButton title="予約はこちら" url="/" />
        </div>
      </Container>
    </header>
  );
}
