/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors:{
            color_primario: "#1E7A4F",
    
    color_secundario: "#F39A2B",
   
      color_encabezados: "#14213D",  
      fondo_general: "#FAF6EF",  
      color_texto_secundario: "#5B6470",
      Amarillo_Farol:  "#FFD166"

      },
      fontFamily: {
        'titulo': ['Montserrat', 'sans-serif'],
        'cuerpo': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}