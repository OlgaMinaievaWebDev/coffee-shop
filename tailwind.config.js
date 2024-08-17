/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#2c2016",
        darkerBrown: "#20160f",
        orange: "#FF9900",
        "orange-dark": "#CC7A00",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
