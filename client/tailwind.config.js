/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1475px", // Max width for 2xl screens
      },
    },
    extend: {
      fontFamily: {
        primary: ["Lexend", "sans-serif"],
        secondary: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
