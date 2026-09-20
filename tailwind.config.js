/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      // Paleta VG: Morado Pastel & Rosa Pastel, con morado fuerte para acentos y WhatsApp
      colors: {
        cream: '#faf5ff', // Fondo morado pastel muy suave y luminoso
        rose: {
          50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6',
          500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#50072b',
        },
        pink: {
          50: '#fdf4f9', 100: '#fce8f3', 200: '#fad1e8', 300: '#f6aed5', 400: '#ef7bbe',
          500: '#e34da0', 600: '#cc2d85', 700: '#aa1c6a', 800: '#8c1a56', 900: '#751a4a',
        },
        purple: {
          50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc',
          500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764',
        },
        violet: {
          50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc',
          500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764',
        },
        indigo: {
          50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8',
          500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b',
        },
        amber: {
          50: '#fdf9ee', 100: '#faf0d3', 200: '#f4e0a6', 300: '#ecca72', 400: '#dfb04a',
          500: '#c8953a', 600: '#a87a2c', 700: '#866024', 800: '#6b4d22', 900: '#573f20',
        },
        orange: {
          400: '#eb9c78', 500: '#d9775a', 600: '#bf5f47',
        },
        red: {
          400: '#e5687f', 500: '#d4405c', 600: '#b93450',
        },
        // Neutros limpios con sutil matiz lavanda pastel
        slate: {
          50: '#faf8fb', 100: '#f4f0f6', 200: '#eae2ee', 300: '#d6cbdb', 400: '#8e8194',
          500: '#6c5f72', 600: '#534759', 700: '#423847', 800: '#2d2531', 900: '#1f1822', 950: '#140d17',
        },
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(168, 85, 247, 0.25)',
        card: '0 2px 12px -2px rgba(147, 51, 234, 0.08)',
      },
    },
  },
  plugins: [],
}
