/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0C0A1F',
        'primary': '#4B3CCD',
        'secondary': '#171986',
        'accent': '#FAFAF8',
       },
    },
  },
  plugins: [],
}