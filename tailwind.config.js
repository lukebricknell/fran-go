const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        hred: {
          DEFAULT: "#C70404",
          dark: "#A00303",
        },
        beige: {
          DEFAULT: "#FAEDCA",
          light: "#fcf4df",
        },
        fadedblack: "rgb(0, 0, 0, 0.4)",
      },
      fontFamily: {
        sans: ["hitchcut", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
