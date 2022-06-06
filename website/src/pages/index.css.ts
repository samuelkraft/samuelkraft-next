import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const hero = style({
  paddingTop: "300px",
  paddingBottom: "300px",
  backgroundImage: "url(/blur.png)",
  backgroundSize: "cover",
});

export const h1 = style({
  fontSize: 38,
  textTransform: "uppercase",
  letterSpacing: 3,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: 104,
      textAlign: "center",
    },
  },
});
