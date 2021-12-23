module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary-color': '#335963',
        'color-domi': '#EEE',
      },
      screens: {
        navxs: { min: "0px", max: "336px" },

        navsm: { min: "337px", max: "767px" },

        navmd: { min: "768px", max: "1102px" },

        navlg: { min: "1103px", max: "5000px" },
      },
      backgroundImage:{
        'header-background': "url('/src/assets/styles/images/background-header.jpg')",
      }
    },
  },
  plugins: [],
};
