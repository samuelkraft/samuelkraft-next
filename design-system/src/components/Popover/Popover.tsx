import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
import { vars } from "../../styles";
import { Box } from "../Box";
import * as styles from "./Popover.css";

export const Popover = PopoverPrimitive.Root;

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = forwardRef(({ children, ...props }, forwardedRef) => (
  <PopoverPrimitive.Content
    sideOffset={16}
    {...props}
    ref={forwardedRef}
    asChild
  >
    <Box
      className={styles.content}
      backgroundColor="background"
      boxShadow="medium"
      padding={8}
      zIndex="1"
      borderRadius="huge"
    >
      {children}
      <PopoverPrimitive.Arrow style={{ fill: vars.colors.background }} />
    </Box>
  </PopoverPrimitive.Content>
));
