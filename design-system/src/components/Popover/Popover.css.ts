import { style, keyframes } from "@vanilla-extract/css";

const enter = keyframes({
  "0%": { transform: "scale(0.9) translateY(10px)", opacity: 0 },
  "100%": { transform: "scale(1) translateY(0)", opacity: 1 },
});

const exit = keyframes({
  "0%": { transform: "scale(1) translateY(0)", opacity: 1 },
  "100%": { transform: "scale(0.9) translateY(10px)", opacity: 0 },
});

export const content = style({
  transformOrigin: "bottom center",
  animationTimingFunction: "cubic-bezier(0.23, 0.10, 0.24, 0.99)",
  animationDuration: "0.15s",
  selectors: {
    '&[data-state="open"]': {
      animationName: enter,
    },
    '&[data-state="closed"]': {
      animationName: exit,
    },
  },
});
