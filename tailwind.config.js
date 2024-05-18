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
      
    },
  },
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}