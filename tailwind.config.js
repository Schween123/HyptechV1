/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: { 
      colors: {
      customColor1: '#093F4E',
      customcyan: "#1985A1",
      customgray: "#DCDCDD",
      customdarkgray: "#C5C3C6",
      customdarkgray2: "#46494C",
      customdarkgray3: "#4C5C68",
      customdarkgray4: "#D9D9D9",
      customgraybg: {
        DEFAULT: '#46494C', // Your base color
        '50': 'rgba(70, 73, 76, 0.5)', // Your color with 50% transparency
      },
      
    },
    fontFamily: {
      'bakbak-one': ['Bakbak One', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
   },
  },
  plugins: [],
}
}