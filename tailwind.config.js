module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: {
          'backgroundColor': '#0D2436',
          'fontcolor': '#ffffff',
          'hoverfontcolor': '#CCCCCC',
          'Selectednomineecard': '#009B86',
          'submitbuttonbackgroundhover': '#34AC9C'
        }
      },
    },
  },
  plugins: [],
}
