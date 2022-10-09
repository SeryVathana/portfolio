/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        big: "400px",
        large: "500px",
      },
      height: {
        big: "400px",
        large: "500px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
