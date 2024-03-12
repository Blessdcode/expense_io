/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292830",
        success: "#00A86B",
        danger:"#FD3C4A"
       
      },
    },
  },
  plugins: [],
}