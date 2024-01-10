/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#871cf8",
        "backgroud-100":"#1a1a1a",
        "backgroud-200":"#292929",
        "backgroud-300":"#404040",
        "backgroud-400":"#5b5b5b"

      }
    },
  },
  plugins: [],
}