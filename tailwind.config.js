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
      screens: {
        tiny: "413px",
        // => @media (min-width: 576px) { ... }
      },
    },
  },
  plugins: [],
};
