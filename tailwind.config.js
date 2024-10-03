/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },

      fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
        base: "0.875rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },

      colors: {
        primary: {
          dark: "#bb4125",
          DEFAULT: "#bf7154",
          light: "#e8c1a8",
        },
        warning: "#ff9800",
        success: "#4caf50",

        background: {
          light: "#f9f6f2",
          gray: "#eeecea",
        },
        dark: {
          light: "#dcdbdb",
          DEFAULT: "#717171",
          deep: "#212121",
        },
      },

      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
