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
      // Paleta VG: rosa empolvado + frambuesa del logo, dorado champagne, ciruela y crema.
      // Se redefinen las paletas base de Tailwind para que todo el sitio quede coherente.
      colors: {
        cream: '#fffaf7',
        rose: {
          50: '#fdf4f6', 100: '#fbe6eb', 200: '#f7cfd9', 300: '#efa9bc', 400: '#e17a97',
          500: '#cc4f75', 600: '#b03a63', 700: '#8f2e50', 800: '#762945', 900: '#62243c', 950: '#3a1224',
        },
        pink: {
          50: '#fff5f7', 100: '#ffe9ee', 200: '#fdd5df', 300: '#f9b8c9', 400: '#f28fab',
          500: '#e5668b', 600: '#c94b71', 700: '#a63a5b', 800: '#892f4c', 900: '#722a42',
        },
        purple: {
          50: '#f8f1f6', 100: '#f1e2ee', 200: '#e5c8de', 300: '#d3a3c6', 400: '#b975a6',
          500: '#9c5188', 600: '#7f3e6d', 700: '#673258', 800: '#532a49', 900: '#45243d',
        },
        violet: {
          50: '#f8f1f6', 100: '#f1e2ee', 200: '#e5c8de', 300: '#d3a3c6', 400: '#b975a6',
          500: '#9c5188', 600: '#7f3e6d', 700: '#673258', 800: '#532a49', 900: '#45243d', 950: '#2e1829',
        },
        indigo: {
          800: '#4a2a44', 900: '#3a2036', 950: '#2b1828',
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
        // Neutros cálidos (con un toque de ciruela) en lugar del gris azulado.
        slate: {
          50: '#fbf8f7', 100: '#f5efee', 200: '#eae0e0', 300: '#d5c8ca', 400: '#7f6f76',
          500: '#5f5158', 600: '#4c4046', 700: '#3d3037', 800: '#2c2128', 900: '#221a1f', 950: '#160f13',
        },
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(176, 58, 99, 0.18)',
        card: '0 2px 12px -2px rgba(98, 36, 60, 0.08)',
      },
    },
  },
  plugins: [],
}
