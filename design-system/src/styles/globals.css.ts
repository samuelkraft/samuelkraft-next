import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { vars } from "./vars.css";

globalFontFace("GT Walsheim Pro", {
  fontWeight: 400,
  fontStyle: "normal",
  src: "url('/fonts/GTWalsheimPro-Regular.woff2') format('woff2')",
  fontDisplay: "optional",
});

globalFontFace("GT Walsheim Pro", {
  fontWeight: 500,
  fontStyle: "normal",
  src: "url('/fonts/GTWalsheimPro-Medium.woff2') format('woff2')",
  fontDisplay: "optional",
});

globalFontFace("GT Walsheim Pro", {
  fontWeight: 700,
  fontStyle: "normal",
  src: "url('/fonts/GTWalsheimPro-Bold.woff2') format('woff2')",
  fontDisplay: "optional",
});

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
  background: vars.colors.background,
  color: vars.colors.text,
  fontFamily:
    "'GT Walsheim Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue', 'sans-serif'",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

globalStyle("#root, #__next", {
  isolation: "isolate",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
