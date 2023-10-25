/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      colors: {
        'chat': '#ffffff61',
        'bg': '#213555',
        'gray': '#f8efef40',
        'gray-text': '#ffffff87',
        'check': '#248A00',
        'check-font': '#28252591',
        'border-payment': '#213555',
        'bg-member': '#C4D5F6',
        'btn-profile': '#E7E3E3',
        
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'itim': ['Itim', 'cursive'],
        'lalezar': ['Lalezar', 'cursive'],
        'irish': ['Irish Grover', 'cursive'],
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
