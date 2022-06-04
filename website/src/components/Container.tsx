import { Box } from "design-system";
import { BoxProps } from "design-system/src/components/Box";

type ContainerProps = {
  children: React.ReactNode;
  width?: BoxProps["maxWidth"];
};

const Container = ({ width = "site", children }: ContainerProps) => (
  <Box maxWidth={width} marginX="auto" paddingX={7}>
    {children}
  </Box>
);

export default Container;
