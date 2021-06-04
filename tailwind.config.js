module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ["'Roboto'", 'sans-serif']
      },
      backgroundImage: theme => ({
        'hero': "linear-gradient(to left, rgba(3, 37, 2, 0.6), rgba(32, 33, 34, 1.0)), url('./img/hero.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
