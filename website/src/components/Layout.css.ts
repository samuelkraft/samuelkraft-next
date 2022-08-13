import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const background = style({
  background: `linear-gradient(180deg, ${vars.colors.brandLight} 0%, ${vars.colors.background} 100%);`,
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: "0",
  zIndex: -1,
});

export const navigation = style({
  left: "50%",
  transform: "translateX(-50%)",
});
