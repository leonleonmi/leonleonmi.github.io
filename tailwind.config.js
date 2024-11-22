/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lemi-blue': '#302AFF',
        'lemi-offwhite': '#F2F0EF',  // Added missing '#' for hex color
      },
    },
  },
  plugins: [],
}