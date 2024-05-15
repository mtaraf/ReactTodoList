import styles from "./footer.module.css";

export default function Footer({ completed, total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Tasks: {total}</span>
      <span className={styles.item}>Completed Tasks: {completed}</span>
    </div>
  );
}
