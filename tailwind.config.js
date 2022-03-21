module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './layouts/**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'scale-dark-blue': '#07131e',
        'scale-yellow-300': '#ffc300'
      },
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
