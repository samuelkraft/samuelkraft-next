import { forwardRef, ReactNode } from "react";
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
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Sets the type of the button */
  type?: "button" | "submit" | "reset";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const router = useRouter();
    const {
      children,
      variant = "primary",
      size = "medium",
      href,
      disabled,
      onClick,
      type = "button",
      ...rest
    } = props;
    return (
      <Box
        as="button"
        type={type}
        className={styles.button({ variant, size })}
        onClick={(e) => {
          if (href) {
            e.preventDefault();
            router.push(href);
          }
          onClick?.(e);
        }}
        disabled={disabled}
        ref={ref}
        {...rest} // Need to spread props here for radix asChild to work
      >
        {children}
      </Box>
    );
  }
);
