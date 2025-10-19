/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5DC",
        beige: "#F5DEB3",
        parchment: "#FFF8DC",
        "light-brown": "#D2B48C",
        "warm-brown": "#8B7355",
        "dark-brown": "#654321",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
