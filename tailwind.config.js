/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        grandstander: ['Grandstander', 'cursive'],
      },
      colors: {
        'smm-pink': '#FFE4EF',
        'smm-yellow':"#F7F6D3",
        'smm-green': "#B8DB80",

      }
    },
  },
  plugins: [],
}