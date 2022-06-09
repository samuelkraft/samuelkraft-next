import cn from "classnames";
import styles from "./Messages.module.css";

const TailBreakdown = () => (
  <ol className={styles.list}>
    <li className={cn(styles.shared, styles.tailBreakdown)}>Hello</li>
  </ol>
);

export default TailBreakdown;
