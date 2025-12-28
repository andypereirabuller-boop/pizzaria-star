/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      keyframes: {
        "mover-horizontalmente": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
        },
      },
      animation: {
        "mover-horizontalmente": "mover-horizontalmente 1s infinite linear",
      },
      backgroundImage: {
        home: "url('/img/fundo.jpg')",
      },
    },
  },
  plugins: [],
};

