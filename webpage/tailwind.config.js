const colors = require('tailwindcss/colors')

module.exports = {
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      cyan: colors.cyan
    },
    extend: {
      height: {
        '18': '4.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
}
