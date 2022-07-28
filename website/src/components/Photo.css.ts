import { style } from "@vanilla-extract/css";

export const container = style({
  perspective: 1000,
  margin: "0 auto",
});

export const flipper = style({
  transformStyle: "preserve-3d",
  position: "relative",
  width: "100%",
  height: "100%",
  boxSizing: "content-box",
});

const shared = {
  backfaceVisibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  width: "inherit",
  height: "inherit",
};

export const front = style({
  ...shared,
  zIndex: 2,
});

export const back = style({
  ...shared,
  transform: "rotateY(180deg)" /* initially hidden */,
  isolation: "isolate",
  overflow: "hidden",
  lineHeight: 1,
  backgroundColor: "#FFFAF2",
  fontFamily: "Ticketing, monospace",
});

export const photoPaper = style({
  position: "absolute",
  width: 500,
  height: 500,
  left: -100,
  transform: "rotate(-20deg)",
  backgroundColor: "#FFFAF2",
  backgroundImage: "url(/photopaper.png)",
  backgroundSize: "320px",
  backgroundRepeat: "repeat",
});
