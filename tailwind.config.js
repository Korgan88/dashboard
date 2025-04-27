/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":      "#000000",
        "bg-card":         "#111111",
        "accent-primary":  "#00e5ff",
        "accent-secondary":"#ff007a",
        "text-light":      "#f5f5f5",
      },
    },
  },
  plugins: [],
};
