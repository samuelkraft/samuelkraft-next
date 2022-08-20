import { forwardRef } from "react";
import { Box, BoxProps } from "../Box";
import * as styles from "./Input.css";

export type InputProps = {
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  BoxProps;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { placeholder, type, id, ...rest } = props;
  return (
    <Box
      as="input"
      placeholder={placeholder}
      ref={ref}
      type={type}
      id={id}
      borderColor={{ base: "border", focus: "text" }}
      borderStyle="solid"
      borderWidth={1}
      borderRadius="medium"
      paddingX={3}
      className={styles.input}
      fontSize="base"
      {...(rest as BoxProps)}
    />
  );
});
