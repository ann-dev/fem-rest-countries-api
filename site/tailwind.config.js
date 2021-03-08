/* eslint-disable */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'dark-600': '#2B3743',
        'dark-700': '#212E37'
      }),
      backgroundImage: (theme) => ({
        'search-icon': 'url("/icons/search-outline.svg")'
      }),
      backgroundPosition: {
        'left-center': 'left 30px center'
      },
      backgroundSize: {
        'icon-small': '18px'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out forwards'
      }
    }
  },
  variants: {},
  plugins: []
};
