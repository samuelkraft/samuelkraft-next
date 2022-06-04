import { Box, BoxProps } from "../Box";

export type SpacerProps = {
  space: BoxProps["gap"];
};

export const Spacer = ({ space }: SpacerProps) => (
  <Box width={space} height={space} />
);
