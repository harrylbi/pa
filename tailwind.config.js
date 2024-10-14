/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'italiana': ['italiana' , 'sans-serif'],
        'jomolhari': ['Jomolhari', 'serif'],
        'inter' : ['inter' ,'serif']

      },
    
      colors: {
        'ijooo': {
          100: '#F7FCF7',
          200: '#F3FBF3',
          300: '#E5F6E6',
          400: '#C9E4CA',
          500: '#9BCB9E',
          600: '#8AB48C',
          700: '#81A983',
          800: '#678769',
          900: '#4D654F',
          1000: '#3C4F3D',
          1100: '#E3EFD9',
          1200: '#444B3E'


        },
        'ijotuo' : {
          100: '#439300',
        },
        'oren' : {
          100: '#FF6501'
        }
      }
    },
  },
  content: [
    './dist/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  
  plugins: [
    require('flowbite/plugin')
  ],
}

