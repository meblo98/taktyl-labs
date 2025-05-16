/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1D4ED8', // Bleu (ex: bleu Tailwind)
        secondary: '#F97316', // Orange (ex: orange Tailwind)
        electric: '#F97316',
        nocturne: '#1D4ED8',
      },
    },
  },
  plugins: [],
}
