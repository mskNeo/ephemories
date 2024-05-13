import React from "react";
import { ThemeToggle } from "./Toggle";
import styles from "styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ephemories</h1>
      <ThemeToggle className={styles.toggle} />
    </div>
  );
}
