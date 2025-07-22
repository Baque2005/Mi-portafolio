/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // habilita modo oscuro con clase 'dark'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-dark': 'linear-gradient(270deg, #1e293b, #334155, #1e293b, #334155)', // tonos azules/negros suaves
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradient-move 15s ease infinite',
      },
    },
  },
  plugins: [],
}
