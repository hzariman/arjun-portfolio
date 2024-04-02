/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'AFont': ["'AFont'"]
      },
      colors: {
        'AOrange': 'rgb(246, 180, 67)',
      },

      textColor: {
        'AOrange': 'rgb(246, 180, 67)',
      }

    },
  },
  plugins: [],
}

