// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         myblue: "#48AFFF",
//         myblack: "#636363",
//         myblack1: "#333333",
//         mygray: "#E8E8E8",
//         mygray1: "#AAAAAA",
//         myorange: "#FF9C00",
//       },
//       animation: {
//         "fade-in": "fadeIn 1s ease-in-out",
//         "slide-left": "slideLeft 0.5s ease forwards",
//         "slide-right": "slideRight 0.5s ease forwards",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

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
        "slide-left": "slideLeft .1s ease-in-out",
        "slide-left-reverse": "slideLeftReverse .1s ease-in-out ", 
        "slide-right": "slideRight .3s ease-in-out forwards",
        "slide-right-reverse": "slideRightReverse .5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideLeft: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideLeftReverse: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRightReverse: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }, 
        },
      },
    },
  },
  plugins: [],
};
