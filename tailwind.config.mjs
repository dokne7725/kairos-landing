/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // --- NUESTRA NUEVA PALETA DE GALERÍA ---
      colors: {
        'ivory': '#FAF8F5',         // Fondo principal (Blanco Hueso)
        'night-gray': '#222222',  // Texto principal (Gris Oscuro)
        'midnight-blue': '#2E3A4D', // Acento (Azul Medianoche)
        'light-gray': '#EAEAEA',   // Bordes y líneas
      },
      // --- NUESTRAS NUEVAS FUENTES DE MUSEO ---
      fontFamily: {
        'serif': ['Playfair Display', 'serif'], // Títulos
        'sans': ['Inter', 'sans-serif'],        // Cuerpo
      },
    },
  },
  plugins: [],
}