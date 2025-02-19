/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      overflow: {
        'hidden-x': 'hidden',
      },
    },
  },
  plugins: [],
}