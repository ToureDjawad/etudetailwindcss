/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
      },
      colors:{
        dark: "#2B2B2B",
        Orange: "#E78A00",
      },
    },
  },
  plugins: [],
}
