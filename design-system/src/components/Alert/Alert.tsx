import { Text } from "../Text";
import { ReactNode } from "react";
import { IconInfoSquare, IconInfoTriangle } from "../Icons";
import { Box } from "../Box";
import { Stack } from "../Stack";
import * as styles from "./Alert.css";

export type AlertProps = {
  children: ReactNode;
  type: "warning" | "info";
};

export const Alert = ({ children, type = "info" }: AlertProps) => (
  <Box
    padding={4}
    backgroundColor="card"
    borderRadius="large"
    className={styles.wrapper}
  >
    <Stack space={3} align="center">
      <Box display="flex" flexShrink={0} color="brand">
        {type === "info" ? <IconInfoSquare /> : <IconInfoTriangle />}
      </Box>
      <Text>{children}</Text>
    </Stack>
  </Box>
);
