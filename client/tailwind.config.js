module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'weight-dark': "url(/client/src/images/background.png')",
      },
    },
  },
  plugins: [require('daisyui')],
};
