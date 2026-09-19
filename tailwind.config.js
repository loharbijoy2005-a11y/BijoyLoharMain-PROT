/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studioCanvas: "#FBFBF9",
        studioSubtle: "#F7F6F2",
        studioCard: "#FFFFFF",
        deepInk: "#09090B",
        charcoalDark: "#18181B",
        amberAccent: "#D97706",
        amberLight: "#FEF3C7",
        amberSubtle: "#FFFBEB",
        borderWarm: "#E5E4DE",
        borderSubtle: "#D4D3CC",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
