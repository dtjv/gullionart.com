const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
  },
  plugins: [require('@tailwindcss/typography')],
}
