import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const linkStyle = style([
  style({
    textOverflow: "ellipsis",
  }),
  sprinkles({
    color: "link",
    textDecoration: "underline",
  }),
]);
