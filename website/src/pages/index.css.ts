import { fontFace, style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const hero = style({
  paddingTop: "300px",
  paddingBottom: "220px",
  backgroundImage: "url(/blur.png)",
  backgroundSize: "cover",
  position: "relative",
  overflow: "hidden",
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

export const videoWrapper = style({
  position: "absolute",
  inset: 0,
  selectors: {
    "&:after": {
      content: "",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      background:
        "linear-gradient(0deg, hsl(0deg 0% 100%) 0%, hsl(0deg 100% 100% / 0%) 100%);",
    },
  },
});

export const video = style({
  transform: "scale(1.2)",
  height: "100%",
  width: "100%",
  objectFit: "cover",
});
