const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'avistaloo': '#335963',
      },
      boxShadow: {
        '4xl': '0 0 20px rgba(51, 89, 99, 0.5)',
      }
    },
  },
  plugins: [],
};
