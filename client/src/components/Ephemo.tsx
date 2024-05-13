import React from "react";
import styles from "styles/Ephemo.module.scss";

export default function Ephemo({ message }: { message: string }) {
  return <span className={styles.ephemo}>{message}</span>;
}
