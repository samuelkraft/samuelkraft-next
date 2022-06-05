import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const hero = style({
  paddingTop: "300px",
  paddingBottom: "300px",
  backgroundImage: "url(/blur.png)",
  backgroundSize: "cover",
});
