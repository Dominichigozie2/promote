/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2ec962',
          'green-dark': '#1fb350',
          'green-light': '#ecfcee',
          'green-pill': '#d8f8cd',
          'green-pill-text': '#1f8b39',
          dark: '#0f1712',
          'dark-card': '#0c130e',
          'card-bg': '#f4fbf5',
          'card-border': '#e2f2e5',
          gray: '#5a6578',
          'gray-light': '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 35px -5px rgba(46, 201, 98, 0.35)',
        'soft-card': '0 4px 20px -2px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
