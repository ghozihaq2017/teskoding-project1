/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        white2: '#e5e5e5',
        white3: '#cccccc',
        blue: '#0194f3',
        blue2: '#015a8a',
        blue3: '#45abff',
        blue4: '#0062b3',
        navy: '#00253f',
        navy1: '#004465',
        darkgrey: '#434343',
        'darkmode-bg': '#121212',
        'darkmode-text': '#ffffff',
        'darkmode-accent': '#1a1a1a',
        'sepiamode-bg': '#c0a080',
        'sepiamode-text': '#000000',
        'sepia-accent': '#8b4513',
      },
      fontFamily: {
        monse: ['Montserrat', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
