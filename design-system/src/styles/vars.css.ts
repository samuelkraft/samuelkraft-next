import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

import { blue, blueDark, sand, sandDark, red, redDark } from "@radix-ui/colors";

export const radii = {
  none: "0",
  medium: "4px",
  large: "8px",
  rounded: "9999px",
};

export const space = {
  "-1": "-1px",
  0: "0",
  1: "1px",
  2: "4px",
  3: "8px",
  4: "12px",
  5: "16px",
  6: "24px",
  7: "32px",
  8: "48px",
  9: "64px",
  auto: "auto",
};

export const heights = {
  none: "0",
  small: "32px",
  medium: "40px",
  large: "48px",
  full: "100%",
  ...space,
};

export const widths = {
  full: "100%",
  fit: "fit-content",
  max: "max-content",
  min: "min-content",
  viewHeight: "100vh",
  viewWidth: "100vw",
  none: "0",
  site: "1500px",
  blog: "750px",
  ...space,
};

export const fontWeights = {
  normal: "400",
  bold: "700",
};

export const fontSizes = {
  h1: "2.375rem",
  h2: "1.75rem",
  large: "1.2rem",
  base: "1rem",
  root: "16px",
  small: "0.9rem",
  inherit: "inherit",
};

const global = createGlobalTheme("html", {
  space,
  radii,
  fontWeights,
  fontSizes,
  heights,
  widths,
});

export const colors = createThemeContract({
  background: null,
  backgroundOpaque: null,
  card: null,
  text: null,
  textSecondary: null,
  link: null,
  border: null,
  code: null,
  brand: null,
});

export const lightTheme = createTheme(colors, {
  background: sand.sand1,
  backgroundOpaque: "rgba(253, 253, 253, 0.9)",
  card: sand.sand4,
  text: sand.sand12,
  textSecondary: sand.sand11,
  link: blue.blue11,
  border: sand.sand5,
  code: sand.sand12,
  brand: red.red10,
});

export const darkTheme = createTheme(colors, {
  background: sandDark.sand1,
  backgroundOpaque: "rgba(22,22, 21, 0.9)",
  card: sandDark.sand5,
  text: sandDark.sand12,
  textSecondary: sandDark.sand11,
  link: blueDark.blue11,
  border: sandDark.sand4,
  code: sandDark.sand3,
  brand: redDark.red10,
});

export const vars = { ...global, colors };
