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
          400: "#ededed",
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
        86: "312px",
        15: "7rem",
        20: "10rem",
      },
      width: {
        104: "416px",
      },
    },
  },
  plugins: [],
};
