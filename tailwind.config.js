module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/ui/**/*.{js,ts,jsx,tsx}", "./src/modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Work Sans", "sans-serif"],
      secondary: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      primary: "#4D65F1",
      grey: {
        100: "FAFAFA",
        200: "FBFBFB",
        300: "E4E4E4",
        400: "#787676",
        500: "#787676",
        600: "#6C757D",
        700: "#333333",
        800: "#151522",
        overlay: "rgba(0, 0, 0, 0.25)",
      },
      white: "#FFFF",
      black: "#0000",
      transparent: "rgba(0, 0, 0, 0)",
      error: {
        primary: "#fdf6f6",
        secondary: "#c20707",
        tertiary: "#de7575",
      },
    },
  },
  plugins: [],
}
