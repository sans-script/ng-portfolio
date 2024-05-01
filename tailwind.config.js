/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'determination': ['Determination Sans Web'],
        'inconsolata': ['Inconsolata', 'monospace']
      }
    },
  },
  plugins: [],
}