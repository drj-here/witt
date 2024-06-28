/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "red-400":"#b48484",
      },
      fontFamily:{
        righteous:['Righteous','sans-serif'],
        delaGothicOne:['Dela Gothic One','sans-serif']
      },
    },
  },
  plugins: [],
}