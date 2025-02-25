/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cardA: '#fff44f',
        cardB: '#a5cbf0',
        cardC: '#ffd0e2',
        cardD: '#cfffd0',
      },
    },
  },
  plugins: [],
}

