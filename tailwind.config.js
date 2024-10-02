/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 576px) { ... }
      'md': '696px',
      // => @media (min-width: 960px) { ... }
      'lg': '1005px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        publicSans: ['"Public Sans"', 'sans-serif', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Jost', 'sans']
      },
      fontSize: {
        custom: ['18px', '24px'],
      },
      colors: {
        primary: '#135ef3',
        secondary: '#1295f3',
        tertiary: '#53b1ec',
        customColor: 'rgba(47, 43, 61, 0.78)',
      }
    },
  },
  plugins: [],
}

