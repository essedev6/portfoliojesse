module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/**/*.{js,jsx}",
    "./src/sections/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#45B649",
        secondary: "#C5E35B",
        dark: "#0B0B0B",
        accent: "#FFD700"
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

