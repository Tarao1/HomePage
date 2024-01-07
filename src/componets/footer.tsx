import styles from "../styles/footer.module.css";
import Logo from "./logo";
import Container from "./container";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <p>FIMIT 2022-2024</p>
        </div>
      </Container>
    </footer>
  );
}
