const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'rj-3xl': { 'max': '1536px' },
      'rj-2xl': { 'max': '1367px' },
      'rj-xl': { 'max': '1281px' },
      'rj-lg': { 'max': '1024px' },
      'rj-md': { 'max': '768px' },
      'rj-sm': { 'max': '640px' },
    },

  },
  plugins: [],
});

