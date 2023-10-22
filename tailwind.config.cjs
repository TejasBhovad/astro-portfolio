/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00B6FF",
        accent: "#7ED4F6",
        lightText: "#070808",
        lightBackground: "#FFFFFF",
        lightSecondary: "#C5D8D8",
        darkText: "#FFFFFF",
        darkBackground: "#070808",
        darkSecondary: "#082531",
        darkUtility: "#191A1C",
        lightUtility: "#DDDDDD",
        live: "#00C708",
      },
    },
  },
  plugins: [],
};
