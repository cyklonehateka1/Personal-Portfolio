/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        xsm: "250px",
        averagePhone: "350px",
      },
      spacing: {
        big: "58rem",
        semiBig: "40rem",
        average: "34rem",
        box: "200px",
      },
    },
  },
  plugins: [],
};
