import { style } from "@vanilla-extract/css";

export const background = style({
  background:
    "radial-gradient(44.02% 100% at 50% 0%, rgba(255, 145, 94, 0.37) 0%, rgba(255, 255, 255, 0) 100%)",
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: "-50vh",
  zIndex: -1,
});

export const navigation = style({
  left: "50%",
  transform: "translateX(-50%)",
});
