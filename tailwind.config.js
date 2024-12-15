module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  
  theme: {
    extend: {
      colors: {
        primary: "#0056b3", // Add your primary color
        secondary: "#FFD700", // Add your secondary color
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add custom font
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
