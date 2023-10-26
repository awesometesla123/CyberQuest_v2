/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}",
            './pages/**/*.{html,js,jsx,ts,tsx}',
            './components/**/*.{html,js,jsx,ts,tsx}'],
  
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'clouds': "url('assets/clouds.png')"
      },
      colors: {
        cloudbg: "#0b3279",
        cloudbn: "#0b2e70",
        content: "#050d26",
        primary: "#070d29",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        navyBlue: '#135be7',
        malwareColor: "#E75F13",
        cryptColor: "#13E71C",
        box: '#0C1739'
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        merriweather: ["Merriweather", "sans"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
});