import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const grain = style({
  filter: "url(#backgroundNoise)",
  width: "100vw",
  height: "100%",
  position: "fixed",
  top: "0",
  bottom: "0",
  background: vars.colors.background,
});
