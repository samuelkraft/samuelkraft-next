import { style } from "@vanilla-extract/css";
import { vars } from "design-system/src/styles/vars.css";

export const header = style({
  display: "flex",
  width: "100%",
  borderBottom: `1px solid ${vars.colors.border}`,
  position: "sticky",
  top: 0,
  backdropFilter: "blur(5px)",
  backgroundColor: vars.colors.backgroundOpaque,
  zIndex: 1,
});

export const logo = style({
  fontWeight: "bold",
  color: vars.colors.text,
  fontSize: 16,
});

export const wrapper = style({
  display: "flex",
  maxWidth: 1100,
  width: "100%",
  padding: "24px 16px",
  margin: "0 auto",
  justifyContent: "space-between",
});

export const sidebar = style({
  position: "sticky",
  top: 110,
  flex: "0 0 280px",
  marginRight: 80,
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
});

export const main = style({
  width: "100%",
});

export const sidebarTitle = style({
  textTransform: "uppercase",
  fontSize: "0.7rem",
  fontWeight: "600",
  color: vars.colors.textSecondary,
});

export const link = style({
  color: vars.colors.text,
  fontWeight: "bold",
  fontSize: vars.fontSizes.small,
  display: "block",
  paddingBlock: 6,
  marginBlock: "-6px",
  paddingInline: 12,
  marginInline: "-12px",
  borderRadius: "8px",
  ":hover": {
    textDecoration: "underline",
  },
});

export const activeLink = style({
  background: vars.colors.card,
});

export const searchInput = style({
  height: 34,
  paddingInline: vars.space[4],
  fontSize: 16,
  appearance: "none",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: 8,
  backgroundColor: vars.colors.background,
});
