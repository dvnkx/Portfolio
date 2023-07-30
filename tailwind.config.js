/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js, ts, react}", "./src/**/*"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#35373d",
        secondary: {
          100: "#171717",
          200: "#494b51",
          300: "#8f9297",
          500: "#dadada",
          400: "#ededed",
        },
        toast: {
          100: "rgb(36, 129, 70, 0.8)",
          200: "rgb(251, 193, 45, 0.8)",
        },
        words: {
          100: "#b5b5b5",
          200: "#e7ebe5",
        },
      },
      fontFamily: {
        body: ["Epilogue"],
      },
      spacing: {
        11: "5rem",
        12: "5.5rem",
        15: "7rem",
        20: "10rem",
        23: "12rem",
        30: "17rem",
      },
      height: {
        15: "7rem",
        20: "10rem",
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleX(0%)" },
          "80%": { transform: "scaleX(75%)" },
          "100%": { transform: "scaleX(70%)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s easy-in-out forwards",
      },
      screens: {
        large: "1174px",
        biggerLg: "1100px",
        lessMd: "744px",
      },
    },
  },
  plugins: [],
};
