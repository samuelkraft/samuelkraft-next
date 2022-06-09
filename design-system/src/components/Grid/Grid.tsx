import { Box, BoxProps } from "../Box";

export type GridProps = {
  gap?: BoxProps["gridGap"];
  templateColumns?: BoxProps["gridTemplateColumns"];
  children: React.ReactNode;
};

export const Grid = ({ gap, templateColumns, children }: GridProps) => (
  <Box display="grid" gridGap={gap} gridTemplateColumns={templateColumns}>
    {children}
  </Box>
);
