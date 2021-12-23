module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
  plugins: {
    "postcss-nesting": true,
    tailwindcss: { config: "./tailwind.config.js" }
  }
};
