/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "red-400":"#b48484",
        "slate-500":"#a6a7a7",
        "slate-900":"#332a2a"
      }
    },
  },
  plugins: [],
}