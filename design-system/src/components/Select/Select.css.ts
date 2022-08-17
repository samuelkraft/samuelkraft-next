import { style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const wrapper = style({
  selectors: {
    "&:focus-within": {
      borderColor: vars.colors.code,
    },
  },
});

export const select = style({
  appearance: "none",
  border: "none",
  ":focus": {
    outline: "none",
  },
});
