import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const wrapper = style({});

globalStyle(`${wrapper} a`, {
  color: vars.colors.brand,
});
