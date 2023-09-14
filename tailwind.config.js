/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     keyframes:{
      moveRight:{
        "0%" :{transform:"translate(0)"},
        "50%" :{transform:"translate(10px)"},
        "100%" :{transform:"translate(0)"},
      }
     },
     animation:{
      moveRight:"moveRight 1s ease-in-out infinite"
     }
    },
  },
  plugins: [],
}
