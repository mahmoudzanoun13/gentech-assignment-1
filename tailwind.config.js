/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f0f0f0",
        white: "#fff",
        mediumvioletred: "#c637a0",
        midnightblue: { "100": "#1c0051", "200": "#1c0050", "300": "#1b004f" },
        lightcoral: "#ff717d",
        thistle: "#d4b4dd",
        gray: "rgba(255, 255, 255, 0.7)",
        palevioletred: { "100": "#d25a75", "200": "#a5456b" },
      },
      fontFamily: {
        inter: "Inter",
        khula: "Khula",
        roboto: "Roboto",
        "roboto-condensed": "'Roboto Condensed'",
      },
      borderRadius: { "4xs": "9px", smi: "13px" },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      "29xl": "3rem",
      xl: "1.25rem",
      "5xl": "1.5rem",
      lg: "1.13rem",
      "21xl": "2.5rem",
      smi: "0.81rem",
    },
  },
  corePlugins: { preflight: false },
};
