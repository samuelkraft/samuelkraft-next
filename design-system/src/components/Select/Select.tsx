import { ReactNode, SelectHTMLAttributes } from "react";
import { Box } from "../Box";
import * as styles from "./Select.css";

type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export type SelectProps = {
  value: string;
  children: ReactNode;
  onChange: NativeSelectProps["onChange"];
};

const Arrow = () => (
  <Box
    position="absolute"
    zIndex="1"
    right={3}
    top={3}
    width={6}
    height={6}
    display="flex"
    alignItems="center"
    justifyContent="center"
    backgroundColor="brand"
    color="white"
    borderRadius="medium"
    fontWeight="bold"
    pointerEvents="none"
  >
    ↕
  </Box>
);

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <Box
      position="relative"
      borderWidth={1}
      borderStyle="solid"
      borderColor="border"
      borderRadius="large"
      display="inline-flex"
      className={styles.wrapper}
      overflow="hidden"
    >
      <Box
        as="select"
        fontSize="base"
        width="full"
        paddingRight={8}
        paddingLeft={3}
        paddingY={2}
        className={styles.select}
        {...props}
      >
        {children}
      </Box>
      <Arrow />
    </Box>
  );
};
