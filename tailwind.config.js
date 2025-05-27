/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        ygradient:{
          1: "#FFC341",
          2: "#C05C2E",
        },
        dark: "#000000",
        light:{
          100: "#434343",
          200: "#313131CC"
        },
        bgradient:{
          1: "#A73EE7",
          2: "#00EBFF",
        },
        bl: "#242D6D",
        yel: {
          100: "#FDBF40",
          200: "#f09d0a"
        }
      }
    },
  },
  plugins: [],
}

