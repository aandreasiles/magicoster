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
        stage: {
          950: '#040406',
          900: '#08080c',
          850: '#0d0d12',
          800: '#14141c',
          700: '#20202c',
        },
        antique: {
          gold: '#cba86e',
          light: '#f1e2c8',
          brass: '#8e703f',
          dark: '#544222',
        },
        velvet: {
          crimson: '#631620',
          dark: '#3d0910',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
