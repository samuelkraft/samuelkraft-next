import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { forwardRef } from "react";
import { Box } from "../Box";
import { Stack } from "../Stack";

export const RadioGroup = RadioGroupPrimitive.Root;

RadioGroup.Item = forwardRef(({ children, ...props }, forwardedRef) => (
  <Stack space={3} direction="row" align="center">
    <RadioGroupPrimitive.Item {...props} ref={forwardedRef} asChild>
      <Box
        backgroundColor="brand"
        width={5}
        height={5}
        borderRadius="rounded"
        display="flex"
        alignItems="center"
        justifyContent="center"
        id={props.value}
      >
        <RadioGroupPrimitive.Indicator asChild>
          <Box
            backgroundColor="white"
            width={3}
            height={3}
            borderRadius="rounded"
          />
        </RadioGroupPrimitive.Indicator>
      </Box>
    </RadioGroupPrimitive.Item>
    <Box as="label" htmlFor={props.value}>
      {children}
    </Box>
  </Stack>
));
