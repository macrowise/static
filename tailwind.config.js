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
        charcoal: '#33434f',
        'rich-black': '#10202c',
        'granny-smith-apple': '#AFD398',
        'ghost-white': '#EAEDF3',
        'dark-jungle-green': '#0C160E',
        'steel-teal': '#6C8989',
        'black-coral': '#455662',
        'deep-champagne': '#F6D4AA',
        'smoked-green': '#6C8c8c'
      },
      fontFamily: {
        'proxima-nova': ['"Proxima Nova"', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif']
      },
      fontSize: {
        'xxs': '10px'
      },
      backgroundSize: {
        '0': 0
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
