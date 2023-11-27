
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {

        Zomato: {
          50: '#000000cc',
          100: '#00000066',
          200: '#F8F8F8',
          300: '#e9626d',
          400: '#e23744',
          500: '#c81d2a',
          600: '#9d1520',
          700: '#700d16',
          800: '#F0F0F0',
          900: '#FFF1E6',
          1000: '#363062',
          1001: '#f5dedaad',
          1002: '#FFFBF5',
          1003: '#F7F7F7'
        }
      },
      screens: {
        'xs': { 'min': '320px', 'max': '374px' }, // Msmobile
        // => @media (min-width: 640px and max-width: 767px) { ... }
        
        'sm': { 'min': '375px', 'max': '538px' }, // Lmobile
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': { 'min': '539px', 'max': '739px' }, // Mtablet
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'xm': { 'min': '740px', 'max': '1023px' }, // Ltablet
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': { 'min': '1024px', 'max': '1279px' }, // Mlaptop
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': { 'min': '1280px', 'max': '' }, // Llaptop
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

      }
    },
  },
  plugins: [],
}