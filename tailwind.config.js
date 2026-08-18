/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8f5',
          100: '#e5eee6',
          200: '#cbe0cd',
          300: '#a3cba6',
          400: '#75b07a',
          500: '#509556',
          600: '#3e7843',
          700: '#335f38',
          800: '#2b4d30',
          900: '#244028',
          950: '#122315',
        },
        accent: {
          light: '#d2b48c',
          DEFAULT: '#a67b5b',
          dark: '#6b4c3a',
        },
        surface: {
          light: '#faf9f6', // off-white paper
          DEFAULT: '#f3f1ec',
          dark: '#e6e3da',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
