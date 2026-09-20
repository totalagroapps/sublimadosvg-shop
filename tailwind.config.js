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
      // Paleta VG: Morado Pastel de fondo (#ede5f7), Rosa Pastel & Acentos Morados Profundos
      colors: {
        cream: '#ede5f7', // Fondo morado pastel visible, cálido y acogedor en toda la página
        rose: {
          50: '#fdf4f8', 100: '#fce7f3', 200: '#fad1e8', 300: '#f7abce', 400: '#f174ab',
          500: '#e3478d', 600: '#ca2774', 700: '#a7195c', 800: '#89174c', 900: '#731742', 950: '#460626',
        },
        pink: {
          50: '#fdf4f9', 100: '#fce8f3', 200: '#fad1e8', 300: '#f6aed5', 400: '#ef7bbe',
          500: '#e34da0', 600: '#cc2d85', 700: '#aa1c6a', 800: '#8c1a56', 900: '#751a4a',
        },
        purple: {
          50: '#f8f4fd', 100: '#ede5f7', 200: '#decbf5', 300: '#ccaef2', 400: '#b48bed',
          500: '#9b64e5', 600: '#8338dc', 700: '#6c24be', 800: '#581c87', 900: '#421369', 950: '#2a0945',
        },
        violet: {
          50: '#f8f4fd', 100: '#ede5f7', 200: '#decbf5', 300: '#ccaef2', 400: '#b48bed',
          500: '#9b64e5', 600: '#8338dc', 700: '#6c24be', 800: '#581c87', 900: '#421369', 950: '#2a0945',
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
        // Neutros con matiz berenjena/lavanda para máxima legibilidad sobre fondo morado pastel
        slate: {
          50: '#faf7fc', 100: '#f3eef8', 200: '#e5dceb', 300: '#cbbdd6', 400: '#8c7897',
          500: '#665272', 600: '#4e3a5a', 700: '#3c2b46', 800: '#2a1d32', 900: '#1b1122', 950: '#110916',
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
