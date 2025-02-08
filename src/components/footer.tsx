import styles from "@/styles/Footer.module.css";
import { InstagramIcon, Facebook01Icon, Mail01Icon } from "hugeicons-react";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a target="_blank" href="https://www.instagram.com/sevincli_studio/">
        <InstagramIcon />
      </a>
      <Facebook01Icon />
      <Mail01Icon />
    </div>
  );
}
