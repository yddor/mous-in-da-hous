const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gaegu: ["Gaegu", "cursive"],
      caveat: ["Caveat", "cursive"],
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      padding: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
