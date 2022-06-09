import { Text } from "../Text";
import { ReactNode } from "react";
import { IconInfoSquare, IconInfoTriangle } from "../Icons";
import { Box } from "../Box";
import { Stack } from "../Stack";

export type AlertProps = {
  children: ReactNode;
  type: "warning" | "info";
};

export const Alert = ({ children, type = "info" }: AlertProps) => (
  <Box padding={4} backgroundColor="card" borderRadius="large">
    <Stack space={3} align="center">
      <Box display="flex" flexShrink={0}>
        {type === "info" ? <IconInfoSquare /> : <IconInfoTriangle />}
      </Box>
      <Text>{children}</Text>
    </Stack>
  </Box>
);
