/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend:{
        colors:{
          'dark-color':'#121212',
          'btn-color-vert':'#45cb85'
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
   
  },
  plugins: [require("daisyui")],
}
