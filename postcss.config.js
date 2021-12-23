module.exports = {
<<<<<<< HEAD
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
=======
  plugins: {
    "postcss-nesting": true,
    tailwindcss: { config: "./tailwind.config.js" }
  }
>>>>>>> 44f83db030ed9a3c9da4bbf007cc9a7aa6b21667
};
