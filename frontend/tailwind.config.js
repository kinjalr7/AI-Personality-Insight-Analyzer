/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        archetype: {
          white: '#F5F5F5',
          blue: '#3B82F6',
          black: '#1F2937',
          red: '#EF4444',
          green: '#10B981',
        }
      }
    },
  },
  plugins: [],
}
