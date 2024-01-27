/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'theme-red': '#26C485',
      'card-bg': '#3a3e43'
    },
    extend: {},
  },
  plugins: [],
}