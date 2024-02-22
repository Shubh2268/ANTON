/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thBlue: '#35EEED',
        thOrange: '#F9A23F',
        thPurple: '#ED02FF'
      }
    },
  },
  plugins: [],
}

