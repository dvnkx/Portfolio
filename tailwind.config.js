/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js, ts, react}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        primary: "#35373d",
        secondary: {
          100: "#494b51",
          200: "#8f9297",
        },
        words: {
          100: "#b5b5b5",
          200: "#e7ebe5",
        },
      },
      fontFamily: {
        body: ["Epilogue"],
      },
    },
  },
  plugins: [],
};
