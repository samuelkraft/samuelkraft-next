import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const orientation = {
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
};

const align = {
  start: {
    alignItems: "flex-start",
  },
  center: {
    alignItems: "center",
  },
  end: {
    alignItems: "flex-end",
  },
};

const justify = {
  start: {
    justifyContent: "flex-start",
  },
  center: {
    justifyContent: "center",
  },
  end: {
    justifyContent: "flex-end",
  },
  between: {
    justifyContent: "space-between",
  },
};

const space = {
  1: {
    gap: "8px",
  },
  2: {
    gap: "16px",
  },
};

export const stack = recipe({
  base: {
    all: "unset",
    display: "flex",
  },
  variants: {
    orientation,
    justify,
    align,
    space,
  },
});

export type Orientation = keyof typeof orientation;
export type Align = keyof typeof align;
export type Justify = keyof typeof justify;
export type Space = keyof typeof space;

export type StackVariants = RecipeVariants<typeof stack>;
