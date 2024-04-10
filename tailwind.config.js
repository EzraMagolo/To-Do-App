const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        primary: colors.blue[500],
        secondary: colors.green[500],
        danger: colors.red[500],
        // Add more colors as needed
      },
      fontFamily: {
        // Add custom fonts
        sans: ['Inter', 'sans-serif'],
        // Add more fonts as needed
      },
      boxShadow: {
        // Add custom box shadows
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        // Add more box shadows as needed
      },
      borderRadius: {
        // Add custom border radius values
        'custom': '0.5rem',
        // Add more border radius values as needed
      },
    },
  },
  plugins: [],
};
