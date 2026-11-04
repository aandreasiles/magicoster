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
        magic: {
          dark: '#07070a',
          card: '#0f0f15',
          cardHover: '#161622',
          border: 'rgba(212, 175, 55, 0.15)',
          gold: '#d4af37',
          goldLight: '#f3d37a',
          goldDark: '#997e24',
          accent: '#8b5cf6',
          cyan: '#38bdf8',
          crimson: '#e11d48',
          smoke: '#94a3b8',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 35s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12), transparent 70%)',
        'mystic-glow': 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15), transparent 60%)',
      }
    },
  },
  plugins: [],
}


