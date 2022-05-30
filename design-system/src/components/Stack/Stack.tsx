import { ReactNode } from "react";
import { Box, BoxProps } from "../Box";

export type StackProps = {
  as?: any;
  children: ReactNode[];
  space?: BoxProps["gap"];
  direction?: BoxProps["flexDirection"];
  align?: BoxProps["alignItems"];
  justify?: BoxProps["justifyContent"];
};

export const Stack = ({
  as,
  children,
  space,
  direction,
  align,
  justify,
}: StackProps) => (
  <Box
    as={as}
    display="flex"
    flexDirection={direction}
    alignItems={align}
    justifyContent={justify}
    gap={space}
  >
    {children}
  </Box>
);
