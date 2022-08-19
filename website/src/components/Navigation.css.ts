import { style } from "@vanilla-extract/css";

export const wrapper = style({
  left: "50%",
  transform: "translateX(-50%)",
  backdropFilter: "blur(10px)",
});
