/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--sand12)",
        secondary: "var(--sand11)",
      },
      backgroundColor: {
        primary: "var(--sand1)",
        secondary: "var(--sand4)",
        secondaryA: "var(--sandA4)",
        tertiary: "var(--sand3)",
        blur: "var(--blurBackground)",
        header: "var(--headerBackground)",
      },
      borderColor: {
        primary: "var(--sand6)",
      },
      ringOffsetColor: {
        primary: "var(--sand12)",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        in: "in .6s both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
