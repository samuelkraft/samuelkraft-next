import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles";

export const ellipsis = style([
  style({
    textOverflow: "ellipsis",
  }),
  sprinkles({
    overflow: "hidden",
    whiteSpace: "nowrap",
  }),
]);
