import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

import { sand, sandDark, red, redDark } from "@radix-ui/colors";

export const radii = {
  none: "0",
  medium: "4px",
  large: "8px",
  huge: "16px",
  rounded: "9999px",
};

export const space = {
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
  10: "128px",
  auto: "auto",
  "-1": "-1px",
  "-2": "-4px",
  "-3": "-8px",
  "-4": "-12px",
  "-5": "-16px",
  "-6": "-24px",
  "-7": "-32px",
  "-8": "-48px",
  "-9": "-64px",
  "-10": "-128px",
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
  site: "1194px",
  blog: "914px",
  ...space,
};

export const fontWeights = {
  normal: "400",
  bold: "700",
};

export const fontSizes = {
  huge: "5rem", // 80px
  xxxlarge: "2.25rem", // 36px
  xxlarge: "1.875rem", // 30px
  xlarge: "1.75rem", // 28px
  large: "1.5rem", // 24px
  base: "1.25rem", // 20px
  small: "1rem", // 16px
  inherit: "inherit",
};

export const shadows = {
  border: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  small: "0px 1px 2px 0px rgba(0, 0, 0, 0.09)",
  medium: "0px 2px 4px 0px #0000001F, 0px 3px 6px 0px #00000026",
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
  brandLight: null,
  brand: null,
  white: null,
});

export const lightTheme = createTheme(colors, {
  background: sand.sand1,
  backgroundOpaque: "rgba(253, 253, 253, 0.9)",
  card: sand.sand4,
  text: sand.sand12,
  textSecondary: sand.sand11,
  link: red.red10,
  border: sand.sand5,
  code: sand.sand12,
  brandLight: red.red5,
  brand: red.red10,
  white: "white",
});

export const darkTheme = createTheme(colors, {
  background: sandDark.sand1,
  backgroundOpaque: "rgba(22,22, 21, 0.9)",
  card: sandDark.sand5,
  text: sandDark.sand12,
  textSecondary: sandDark.sand11,
  link: redDark.red10,
  border: sandDark.sand4,
  code: sandDark.sand3,
  brandLight: redDark.red3,
  brand: redDark.red10,
  white: "white",
});

export const vars = { ...global, colors };
