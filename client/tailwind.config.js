/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'weight-dark': "url(/client/src/images/background.png')",
      },
    },
  },
  plugins: [require('daisyui')],
};
