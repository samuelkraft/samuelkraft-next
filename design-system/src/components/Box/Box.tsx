import React from "react";
import cn from "classnames";
import { sprinkles } from "../../styles/sprinkles.css";
import type { Sprinkles } from "../../styles/sprinkles.css";

type HTMLProperties = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  "as" | "color" | "height" | "width"
>;

export type BoxProps = Sprinkles &
  HTMLProperties & {
    as?: React.ElementType;
    className?: string;
  };

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as = "div", className, ...props }: BoxProps, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    /* eslint-disable-next-line */
    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<Sprinkles, "reset">)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = sprinkles({
      ...atomProps,
    });

    return React.createElement(as, {
      className: cn(atomicClasses, className),
      ...nativeProps,
      ref,
    });
  }
);

export default Box;
