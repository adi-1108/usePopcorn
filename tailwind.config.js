/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        'custom-height' : 'calc(100vh - 7.2rem )'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
