/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unifor: {
          anil: '#004AF7',
          marinho: '#132190',
          gelo: '#E4F2FE',
          azulClaro: '#87B7FE',
        },
      },
    },
  },
  plugins: [],
}
