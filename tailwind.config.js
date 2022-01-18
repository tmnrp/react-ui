module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "white",
        dark: "#121212",

        success: "#0ABB92",
        danger: "#D55438",
        info: "#44AEE4",
        warning: "#E7A61A",

        primary: "#14b8a6",
        secondary: "#f1f5f9",
        "secondary-dimmer": "#f8fafc",
        "secondary-dark": "#2a2a2a",
        "secondary-dark-dimmer": "#1d1d1d",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
