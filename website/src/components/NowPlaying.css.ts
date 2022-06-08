import { keyframes } from "@vanilla-extract/css";
import { globalKeyframes } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

// Make keyframes global to make blogpost with inline css work
globalKeyframes("bounce", {
  "10%": { transform: "scaleY(0.3)" },
  "30%": { transform: "scaleY(1)" },
  "60%": { transform: "scaleY(0.5)" },
  "80%": { transform: "scaleY(0.75)" },
  "100%": { transform: "scaleY(0.6)" },
});

export const bar = style({
  width: 3,
  height: "100%",
  backgroundColor: vars.colors.brand,
  borderRadius: 3,
  transformOrigin: "bottom",
  transition: "opacity 0.3s ease-out",
  animation: "bounce 2.2s ease infinite alternate",
  content: "",
  selectors: {
    "&:nth-of-type(2)": {
      animationDelay: "-2.2s",
    },
    "&:nth-of-type(3)": {
      animationDelay: "-3.7s",
    },
  },
});
