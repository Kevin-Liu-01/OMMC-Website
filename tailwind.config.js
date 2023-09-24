module.exports = {
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
    },
  },
  plugins: [],
};
