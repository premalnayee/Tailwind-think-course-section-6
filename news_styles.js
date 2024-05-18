module.exports = {
  content: ['./dist/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '640px',
      'desktop': '1000px',
    },
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen desktop': {
            maxWidth: '1140px',
          },
        }
      })
    }
  ],
}