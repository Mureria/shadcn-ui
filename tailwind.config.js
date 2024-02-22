/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:'rgb(161,161,170)',
        bg:'rgb(39,39,42)',
        white:'rgb(254,254,254)',
        black:'#18181B',
        blacked:'rgb(8, 8, 8)',
        transparent:'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}