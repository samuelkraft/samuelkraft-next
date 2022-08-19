import { style } from "@vanilla-extract/css";

export const input = style({
  appearance: "none",
  ":focus": {
    outline: "none",
  },
});
