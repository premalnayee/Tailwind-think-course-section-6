module.exports = {
  content: ['./dist/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: ['Oswald']
       },
       colors: {
        mainColor: '#1E293B'
       },
       spacing: {
        13 : '3.25rem',
       }
    },
  },
  variants: {
    extend: {},
  },

}