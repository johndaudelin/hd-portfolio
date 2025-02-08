import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <h1 className={styles.header}>Hannah Daudelin</h1>
      </a>
      <div className={styles.buttons}>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">Bio / CV</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
