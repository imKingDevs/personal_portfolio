/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Mans2': "url('/src/assets/image/Mans2.jpg')",
      }
    },
  },
  plugins: [],
}
