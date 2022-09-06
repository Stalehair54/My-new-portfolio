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
    },
  },
  plugins: [],
};
