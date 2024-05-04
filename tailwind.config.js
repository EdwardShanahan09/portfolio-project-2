/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Regular"],
        bold: ["Bold"],
      },
      colors: {
        dark: "#001B29",
        light: "#EBF8FF",
        primary: "#0AADFF",
        secondary: "#9378E2",
      },
    },
  },
  plugins: [],
};
