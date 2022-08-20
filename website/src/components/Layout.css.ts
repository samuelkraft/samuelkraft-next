import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const gradient = style({
  filter: "url(#backgroundNoise)",
  background: `linear-gradient(180deg, ${vars.colors.brandLight} 0%, transparent 100%);`,
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: "0",
});

export const grain = style({
  filter: "url(#backgroundNoise)",
  width: "100vw",
  height: "100%",
  position: "fixed",
  top: "0",
  bottom: "0",
  background: vars.colors.background,
});

export const navigation = style({
  left: "50%",
  transform: "translateX(-50%)",
});
