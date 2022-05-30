import { globalStyle } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

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
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, 'Segoe UI Emoji', 'Segoe UI Symbol'",
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
  color: vars.colors.link,
  textDecoration: "none",
});

globalStyle("article p", {
  color: vars.colors.text,
  lineHeight: 1.6,
  marginBottom: vars.space[4],
  fontSize: 17,
});
