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
        "slide-left-reverse": "slideLeftReverse .1s ease-in-out",
        "slide-right": "slideRight .3s ease-in-out forwards",
        "slide-right-reverse": "slideRightReverse .5s ease-in-out forwards",
        "my-anim": "myAnim 1s linear 0s 1 normal none",
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
        myAnim: {
          "0%": {
            animationTimingFunction: "ease-in",
            opacity: 0,
            transform: "translateX(-250px)",
          },
          "38%": {
            animationTimingFunction: "ease-in",
            opacity: 1,
            transform: "translateX(0)",
          },
          "55%": {
            animationTimingFunction: "ease-in",
            transform: "translateX(0px)",
          },
          "100%": {
            animationTimingFunction: "ease-in",
            transform: "translateX(0)",
          },
        },
      },

      screens: {
        "max-xxxl": { max: "1500px" },
        "max-xxl": { max: "1400px" },
        "max-xl": { max: "1300px" },
        "max-l": { max: "1200px" },
        "max-xxxl1": { max: "1100px" },
        "max-xxl2": { max: "1000px" },
        "max-xl3": { max: "900px" },
        "max-l4": { max: "800px" },
        "max-1": { max: "700px" },
        "max-2": { max: "600px" },
        "max-3": { max: "500px" },
      },
    },
  },
  plugins: [],
};
