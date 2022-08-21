import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const grain = style({
  filter: "url(#backgroundNoise)",
});

export const absolute = style({
  mixBlendMode: "multiply",
});
