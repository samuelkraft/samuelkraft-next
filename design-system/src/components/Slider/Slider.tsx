import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef } from "react";
import { Box } from "../Box";

export type SliderProps = SliderPrimitive.SliderProps;

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (props, forwardedRef) => {
    const value = props.value || props.defaultValue;

    return (
      <SliderPrimitive.Slider {...props} ref={forwardedRef} asChild>
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          width="full"
          height={4}
        >
          <SliderPrimitive.Track asChild>
            <Box
              backgroundColor="border"
              position="relative"
              borderRadius="rounded"
              height={2}
              width="full"
            >
              <SliderPrimitive.Range asChild>
                <Box
                  position="absolute"
                  backgroundColor="brand"
                  borderRadius="rounded"
                  height="full"
                />
              </SliderPrimitive.Range>
            </Box>
          </SliderPrimitive.Track>
          {value?.map((_, i) => (
            <SliderPrimitive.Thumb key={i} asChild>
              <Box
                width={6}
                height={6}
                backgroundColor="brand"
                boxShadow="small"
                borderRadius="rounded"
              />
            </SliderPrimitive.Thumb>
          ))}
        </Box>
      </SliderPrimitive.Slider>
    );
  }
);
