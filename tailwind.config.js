/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#4A7856",
        secondary: "#2D3047",
        tertiary: "#A1E8AF",
        accent: "#6EA4BF",
        error: "#DE1A1A",
        cream: "#f2f6d0ff",
        honeydew: "#d0e1d4ff",
        "dark-green": "#14281dff",
      },
      fontFamily: {
        sans: ["Source Sans\\ 3", "sans-serif"],
        serif: ["Merriweather", "serif"],
        brand: ["Indie Flower", "cursive"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
  plugins: [],
};
