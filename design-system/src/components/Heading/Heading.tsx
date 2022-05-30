import { ReactNode } from "react";
import * as styles from "./Heading.css";

export type HeadingProps = {
  /** Heading content */
  children: ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
