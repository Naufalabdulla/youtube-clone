/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{svg}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1E1E1E'
      }
    },
  },
  plugins: [],
}

