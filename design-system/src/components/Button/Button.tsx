import { ReactNode } from "react";
import { useRouter } from "next/router";
import * as styles from "./Button.css";
import { Box } from "../Box";

export type ButtonProps = {
  /** Button content */
  children: ReactNode;
  /** Sets the style of the button */
  variant?: styles.Variant;
  /** Sets the size  */
  size?: styles.Size;
  /** Sets the link of the button */
  href?: string;
  /** Sets if the button is clickable or not */
  disabled?: boolean;
  /** Sets the target of the button */
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  href,
  disabled,
  onClick,
}: ButtonProps) => {
  const router = useRouter();
  return (
    <Box
      as="button"
      className={styles.button({ variant, size })}
      onClick={() => (href ? router.push(href) : onClick)}
      disabled={disabled}
    >
      {children}
    </Box>
  );
};
