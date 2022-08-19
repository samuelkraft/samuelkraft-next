import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  ConditionalValue,
  RequiredConditionalValue,
} from "@vanilla-extract/sprinkles";
import {
  space,
  colors as themeColors,
  radii,
  fontWeights,
  fontSizes,
  heights,
  widths,
  shadows,
} from "./vars.css";

import { globalStyle } from "@vanilla-extract/css";

const colors = themeColors || "inherit" || "transparent";

// Ensure reset has lowest specificity
/* DO NOT MOVE THIS LINE */
import "./reset.css";
/* DO NOT MOVE THIS LINE */

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
});

globalStyle("html, body", {
  height: "100%",
  padding: 0,
});

globalStyle("body", {
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
  background: colors.background,
  color: colors.text,
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

globalStyle("a:hover", {
  cursor: "pointer",
});

const responsiveProperties = defineProperties({
  conditions: {
    small: {},
    medium: { "@media": "screen and (min-width: 480px)" },
    large: { "@media": "screen and (min-width: 768px)" },
    xlarge: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "small",
  properties: {
    display: [
      "none",
      "flex",
      "block",
      "inline",
      "inline-block",
      "grid",
      "inline-flex",
    ],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    flexShrink: [0, 1],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    height: heights,
    width: widths,
    minWidth: widths,
    borderRadius: radii,
    borderWidth: space,
    borderStyle: ["solid", "dotted", "dashed", "double"],
    borderColor: colors,
    fontWeight: fontWeights,
    fontSize: fontSizes,
    fontStyle: ["normal", "italic"],
    textAlign: ["left", "center", "right"],
    textTransform: ["none", "uppercase", "lowercase", "capitalize"],
    whiteSpace: ["nowrap", "normal"],
    gap: space,
    maxWidth: widths,
    gridGap: space,
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
      "repeat(4, 1fr)",
      "repeat(5, 1fr)",
      "repeat(6, 1fr)",
      "repeat(7, 1fr)",
      "repeat(8, 1fr)",
      "repeat(9, 1fr)",
      "repeat(10, 1fr)",
      "repeat(11, 1fr)",
      "repeat(12, 1fr)",
    ],
    listStyle: ["none", "disc", "decimal"],
    letterSpacing: ["0", "-0.3px"],
    lineHeight: ["0", "1", "1.25", "1.5", "1.75", "2"],
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    top: space,
    right: space,
    bottom: space,
    left: space,
    inset: space,
    zIndex: ["-1", "0", "1", "2", "3"],
    overflow: ["visible", "hidden", "scroll", "auto"],
    aspectRatio: ["1/1", "16/9", "3/2", "2.35/1"],
    boxShadow: shadows,
    isolation: ["auto", "isolate"],
    pointerEvents: ["auto", "none"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    cursor: ["default", "pointer", "not-allowed", "help"],
    target: ["_blank", "_self", "_parent", "_top"],
  },
});

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: "&:active" },
    focus: { selector: "&:focus" },
    hover: { selector: "&:hover" },
  },
  defaultCondition: "base",
  properties: {
    backgroundColor: colors,
    borderColor: colors,
    color: colors,
    opacity: ["0", "0.25", "0.5", "0.75", "1"],
    textDecoration: ["none", "underline", "line-through", "dotted underline"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  selectorProperties
);
export const mapResponsiveValue = createMapValueFn(responsiveProperties);
export type OptionalResponsiveValue<Value extends string | number> =
  ConditionalValue<typeof responsiveProperties, Value>;
export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveProperties, Value>;

export type Sprinkles = Parameters<typeof sprinkles>[0];
