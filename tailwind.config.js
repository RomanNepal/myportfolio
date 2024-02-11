const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  darkMode: "class",
};
