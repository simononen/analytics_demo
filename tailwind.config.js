module.exports = (isProd) => ({
  prefix: "",
  purge: {
    enabled: isProd,
    content: ["**/*.html", "**/*.ts"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1f4371",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        base: "#F9F9F9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
