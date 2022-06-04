import { ReactNode } from "react";
import { Box, BoxProps } from "../Box";

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
    | "span";
  children: string | ReactNode;
  color?: BoxProps["color"];
  letterSpacing?: BoxProps["letterSpacing"];
  lineHeight?: BoxProps["lineHeight"];
  size?: BoxProps["fontSize"];
  weight?: BoxProps["fontWeight"];
  textAlign?: BoxProps["textAlign"];
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
}: TextProps) => (
  <Box
    as={as}
    color={color}
    letterSpacing={letterSpacing}
    lineHeight={lineHeight}
    fontSize={size}
    fontWeight={weight}
    textAlign={textAlign}
  >
    {children}
  </Box>
);
