/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html", "./index.html"],
  theme: {
    extend: {
      colors: {
        bmwLightBlue: "#81c4ff",
        bmwDarkBlue: "#3734b5",
        bmwRed: "#e7222e",
      },
    },
  },
  plugins: [],
};