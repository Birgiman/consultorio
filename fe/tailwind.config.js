/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'indian-khaki': {
          '50': '#f9f7f3',
          '100': '#f1ece3',
          '200': '#e2d8c6',
          '300': '#d0bea1',
          '400': '#c4aa8a',
          '500': '#ae8861',
          '600': '#a17755',
          '700': '#866048',
          '800': '#6d4f3f',
          '900': '#594235',
          '950': '#2f211b',
        },
        'spectra': {
          '50': '#f4f9f8',
          '100': '#daedea',
          '200': '#b5dad4',
          '300': '#88c0b9',
          '400': '#5fa29c',
          '500': '#458782',
          '600': '#356c69',
          '700': '#305c5a',
          '800': '#284746',
          '900': '#253c3c',
          '950': '#112122',
        },
      },
      screens: {
        'laptop': '1366px',
      }
    },
  },
  plugins: [],
};

