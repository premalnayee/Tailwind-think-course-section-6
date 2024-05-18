const { plugin } = require('postcss');

module.exports = {
  presets: [
    require('./news_styles')
  ],
  corePlugins: {
    container: false,
  },
  content: ['./dist/**/*.html'],
  theme: {
    container: {
      center: true,
      padding: {
      DEFAULT: '0.5rem',
      sm: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '4rem',
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '600',
            },
            h2: {
              fontWeight: '400',
            },
          }
        },
        lg: {
          css: {
            h2: {
              color: 'green',
            },
          }
        }
      }
    },
  },
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ], 
}