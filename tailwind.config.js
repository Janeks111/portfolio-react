/** @type {import('tailwindcss').Config}*/
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "0",
        exsm: "2rem", // Set padding to 0 for exsm screen width
      },
      margin: "auto",
      screens: {
        xl: "1300px",
        lg: "1023px",
        sm: "639px",
        md: "767px",
        exsm: "389px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "789px" },
      // => @media (max-width: 789px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      exsm: { max: "389px" },
      // => @media (max-width: 389px) { ... }
    },
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
