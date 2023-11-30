/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        beardHeading: "2.188vw",
        beardParagraph: "1.3vw",
        beardTitle: "3.229vw",

        beardMdTitle: "3.875rem",
        beardMdHeading: "2.625rem",
        beardMdParagraph: "1rem",

        beardSmTitle: "1.875rem",
        beardSmHeading: "1.625rem",
        beardSmParagraph: "1rem",
      },
      colors: {
        "lucky-white": "white",
        "lucky-blue": "#5A89EA",
        "lucky-black": "#030303",
        "luck-grey": "#6F7889",
        "luck-dark4": "#D4D7DD",
      },
    },
  },
  plugins: [],
};
