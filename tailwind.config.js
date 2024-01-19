/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#fafafa",
          50: "#ffffff",
        },
        dark: {
          100: "#202c37",
          50: "#2b3945",
        },
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(280px, 1fr))",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      screens: { xsm: "470px" },
    },
  },
  plugins: [],
};
