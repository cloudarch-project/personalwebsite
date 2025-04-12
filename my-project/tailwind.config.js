/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // ✅ abilita dark mode manuale con una classe
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'], // font elegante
        },
        colors: {
          primary: '#1a1a1a',
          accent: '#00e5ff',
          light: '#f9fafb',
          muted: '#9ca3af',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'), // opzionale, per markdown eleganti
      require('@tailwindcss/forms'),
    ],
  }
  