import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const editor = style({
  backgroundColor: vars.colors.code,
});

export const preview = style({
  padding: vars.space[7],
});

export const wrapper = style({
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  marginBottom: vars.space[4],
  borderRadius: 8,
  overflow: "hidden",
});
