module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        160: "40rem",
      },
      flex: {
        20: "0 0 20%",
        60: "0 0 60%",
        80: "0 0 80%",
        100: "0 0 100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
