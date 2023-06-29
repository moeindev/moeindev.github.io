/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'mma-core-background': '#fafaf8',
        'mma-core-background-variant': '#dadacb'
      }
    },
  },
  plugins: [],
}

