/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      mobile: '280px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        'mma-core-background': '#fafaf8',
        'mma-core-background-variant': '#dadacb',
      },
    },
  },
  plugins: [],
};
