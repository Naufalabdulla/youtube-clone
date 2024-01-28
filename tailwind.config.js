/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.svg',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
        'secondary': '#1E1E1E',
        'third': '#2C2C2C',
      },
      height: {
        // 'nav': `calc('100vh'-'78px')`
      },
      backgroundImage: {
        'hero': 'url(/images/quantum.jpg)'
      }
    },
  },
  plugins: [],
}

