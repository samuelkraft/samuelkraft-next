import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const gradient = style({
  filter: "url(#backgroundNoise)" /* Created by Grain.tsx */,
  background: `linear-gradient(180deg, ${vars.colors.brandLight} 0%, transparent 100%);`,
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: "0",
});

export const navigation = style({
  left: "50%",
  transform: "translateX(-50%)",
});
