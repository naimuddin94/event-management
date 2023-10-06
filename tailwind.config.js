/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        satisfy: "'Satisfy', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
};
