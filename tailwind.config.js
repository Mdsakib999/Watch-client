/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure Tailwind scans your files
  theme: {
    extend: {
      typography: {
        // DEFAULT: {
        //   css: {
        //     h1: { color: "#1E40AF", fontWeight: "bold" }, // Custom H1 color
        //     p: { fontSize: "1.1rem", color: "#333" }, // Custom paragraph size
        //     a: { color: "#f43f5e", textDecoration: "underline" }, // Custom link styles
        //     ul: { listStyleType: "square" }, // Change bullet style
        //   },
        // },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], // Add Typography plugin
};
