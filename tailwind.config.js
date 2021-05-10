const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxsm: "400px",
      xsm: "500px",
      ...defaultTheme.screens,
    },
    borderWidth: {
      10: "10px",
      15: "15px",
    },

    extend: {
      screens: {},
      colors: {
        charcoal: "#343b46",
        black: "#2a2c2a",
        lipstick: "#d61f26",
        yellow: "#ffd250",
        pink: "#DF1995",
        blue: " #2CCCD3"
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      width: {
        '30': '30%', 
      },

      height: {

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
