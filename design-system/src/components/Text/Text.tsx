import { ReactNode } from "react";
import { Box, BoxProps } from "../Box";
import * as styles from "./Text.css";

export type TextProps = {
  as?:
    | "code"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "p"
    | "span"
    | "figcaption";
  children: string | ReactNode;
  color?: BoxProps["color"];
  letterSpacing?: BoxProps["letterSpacing"];
  lineHeight?: BoxProps["lineHeight"];
  size?: BoxProps["fontSize"];
  weight?: BoxProps["fontWeight"];
  textAlign?: BoxProps["textAlign"];
  transform?: BoxProps["textTransform"];
  decoration?: BoxProps["textDecoration"];
  ellipsis?: boolean;
};

const getFontSize = (
  as: TextProps["as"],
  size?: TextProps["size"]
): TextProps["size"] => {
  if (size) {
    return size;
  }
  switch (as) {
    case "h1":
      return { small: "xxlarge", large: "xxxlarge" };
    case "h2":
      return { small: "xlarge", large: "xxlarge" };
    case "h3":
      return { small: "large", large: "large" };
    case "p":
    default:
      return "base";
  }
};

export const Text = ({
  as = "p",
  children,
  color,
  letterSpacing,
  lineHeight,
  size,
  weight,
  textAlign,
  transform,
  decoration,
  ellipsis,
}: TextProps) => {
  const fontSize = getFontSize(as, size);
  return (
    <Box
      className={ellipsis ? styles.ellipsis : undefined}
      as={as}
      color={color}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      fontSize={fontSize}
      fontWeight={weight}
      textAlign={textAlign}
      textTransform={transform}
      textDecoration={decoration}
    >
      {children}
    </Box>
  );
};
