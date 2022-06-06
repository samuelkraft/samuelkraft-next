import { fontFace, style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const hero = style({
  paddingTop: "300px",
  paddingBottom: "300px",
  backgroundImage: "url(/blur.png)",
  backgroundSize: "cover",
});

const displayFont = fontFace({
  src: 'url("/fonts/ClashDisplay-Bold.woff2") format("woff2")',
});

export const h1 = style({
  fontSize: 38,
  textTransform: "uppercase",
  letterSpacing: 3,
  fontFamily: displayFont,
  fontWeight: "bold",
  "@media": {
    "screen and (min-width: 480px)": {
      fontSize: 48,
      textAlign: "center",
    },
    "screen and (min-width: 1024px)": {
      fontSize: 104,
    },
  },
});
