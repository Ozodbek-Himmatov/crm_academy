/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {},
    extend: {}
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar-hide')]
}
