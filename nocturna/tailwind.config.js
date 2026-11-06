/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  darkMode: 'media', // Soporte automático para el modo oscuro del sistema / DevTools
  theme: {
    extend: {
      colors: {
        'primario': '#1E7A4F',         /* Verde Ruta */
        'secundario': '#F39A2B',       /* Naranja Pedal */
        'encabezados': '#14213D',      /* Azul Noche */
        'fondo-crema': '#FAF6EF',      /* Crema */
        'gris-asfalto': '#5B6470',     /* Gris Asfalto */
        'amarillo-farol': '#FFD166',   /* Amarillo Farol */
      },
      fontFamily: {
        'titulos': ['Montserrat', 'sans-serif'],
        'texto': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}