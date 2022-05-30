import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  ConditionalValue,
  RequiredConditionalValue,
} from "@vanilla-extract/sprinkles";
import {
  space,
  colors,
  radii,
  fontWeights,
  fontSizes,
  heights,
  widths,
} from "./vars.css";

const responsiveProperties = defineProperties({
  conditions: {
    small: {},
    medium: { "@media": "screen and (min-width: 480px)" },
    large: { "@media": "screen and (min-width: 768px)" },
    xlarge: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "small",
  properties: {
    display: ["none", "flex", "block", "inline", "grid", "inline-flex"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
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
    borderRadius: radii,
    fontWeight: fontWeights,
    fontSize: fontSizes,
    textAlign: ["left", "center", "right"],
    textDecoration: ["none", "underline", "line-through"],
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
    opacity: ["0", "0.25", "0.5", "0.75", "1"],
    letterSpacing: ["0", "-0.3px"],
    lineHeight: ["1", "1.25", "1.5", "1.75", "2"],
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    top: space,
    right: space,
    bottom: space,
    left: space,
    zIndex: ["0", "1", "2", "3"],
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
    cursor: ["default", "pointer", "not-allowed"],
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
