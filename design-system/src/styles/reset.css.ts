import { style } from "@vanilla-extract/css";

export const base = style({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

const block = style({
  display: "block",
});

const list = style({
  listStyle: "none",
});

export const element = {
  article: block,
  aside: block,
  details: block,
  div: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
};

export type Element = keyof typeof element;
