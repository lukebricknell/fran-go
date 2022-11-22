/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        hred: {
          DEFAULT: "#C70404",
          dark: "#770202",
        },
        beige: {
          DEFAULT: "#FAEDCA",
          light: "#fcf4df",
        },
        fadedblack: "rgb(0, 0, 0, 0.4)",
      },
      fontFamily: {
        sans: ["hitchcut", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
