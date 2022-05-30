import { ReactNode } from "react";
import * as styles from "./Stack.css";

export type StackProps = {
  children: ReactNode[];
  space?: styles.Space;
  orientation?: styles.Orientation;
  align?: styles.Align;
  justify?: styles.Justify;
};

export const Stack = ({
  children,
  space,
  orientation = "horizontal",
  align,
  justify,
}: StackProps) => (
  <div className={styles.stack({ space, orientation, align, justify })}>
    {children}
  </div>
);
