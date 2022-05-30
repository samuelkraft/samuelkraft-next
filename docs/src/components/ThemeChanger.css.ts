import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const select = style({
  height: 34,
  appearance: "none",
  border: `1px solid ${vars.colors.border}`,
  marginLeft: vars.space[4],
  paddingInline: vars.space[4],
  fontSize: 16,
  backgroundColor: vars.colors.background,
});
