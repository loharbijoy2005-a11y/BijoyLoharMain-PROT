/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studioCanvas: "#12100B",
        studioSubtle: "#18150F",
        studioCard: "#1E1A12",
        deepInk: "#FCF9F2",
        charcoalDark: "#12100B",
        amberAccent: "#E5C158",
        amberLight: "#FBF0B9",
        amberSubtle: "#2A2312",
        borderWarm: "rgba(229, 193, 88, 0.18)",
        borderSubtle: "rgba(229, 193, 88, 0.32)",
        muted: "#C5B99D",
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
