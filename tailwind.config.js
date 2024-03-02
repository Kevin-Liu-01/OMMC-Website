const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  darkMode: "class",

  content: [
    "./src/App.js",
    "./src/Pages/**/*.{tsx,js}",
    "./src/Components/**/*.js",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      text: {
        general: ["generalsans", "sans-serif"],
      },
      screens: {
        tiny: "413px",
        // => @media (min-width: 576px) { ... }
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
      },
    },
  },
  plugins: [],
});
