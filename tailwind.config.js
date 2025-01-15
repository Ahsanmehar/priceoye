/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#48AFFF",
        myblack: "#636363",
        myblack1: "#333333",
        mygray: "#E8E8E8",
        mygray1: "#AAAAAA",
        myorange: "#FF9C00",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
