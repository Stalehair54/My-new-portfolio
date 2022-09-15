/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      },
      boxShadow: {
        "3xl":
          " rgba(0, 0, 0, 0.3) 19px 19px 38px, rgba(0, 0, 0, 0.22) 19px 15px 12px;",
      },
      boxShadow: {
        "4xl":
          "rgba(0, 0, 0, 0.3) 0px 0px 33px, rgba(0, 0, 0, 0.3) 0px -12px 30px, rgba(0, 0, 0, 0.3) 0px 4px 6px, rgba(0, 0, 0, 0.3) 0px 12px 13px, rgba(0, 0, 0, 0.3) 0px -3px 5px",
      },
      fontFamily: {
        bella: ["La Belle Aurore", "cursive"],
      },
    },
    screens: {
      "2xl": { max: "1500px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1300px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1000px" },
      tb: { max: "980px" },
      mon3: { max: "1330px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "760px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "360px" },
      xsm1: { max: "450px" },
      xsm2: { max: "400px" },
      xsm3: { max: "380px" },
    },
  },
  plugins: [],
};
