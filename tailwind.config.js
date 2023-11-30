/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkBackground: '#000000',
      darkSurface: '#101010',
      snow: '#FFFAFA',
      frenchGray: '#BEBFC5',
      royalBlue: '#002366',
      tangBlue: '#0059CF',
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

