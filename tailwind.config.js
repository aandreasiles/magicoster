/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070708',
          900: '#0c0c0e',
          850: '#111114',
          800: '#17171b',
          700: '#232329',
        },
        champagne: {
          light: '#e8d8be',
          DEFAULT: '#c5a880',
          dark: '#a08560',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
