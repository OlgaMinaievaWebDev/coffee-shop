/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#2D2B2B",
        orange: "#FF9900",
        "orange-dark": "#CC7A00",
      },
    },
  },
  plugins: [],
};
