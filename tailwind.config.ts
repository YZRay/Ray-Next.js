import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   "theme-dark": "#16213E",
      //   "theme-darker": "#041C32",
      //   "theme-light": "#FAF6F0",
      //   "theme-lighter": "#FFFBF5",
      // },
      backgroundImage: {
        "theme-dark": "linear-gradient(-45deg, #1b1b1b 50%, #191919 80%)",
        "theme-light": "linear-gradient(45deg, #FAF6F0 30%, #FFFBF5 100%)",
        "hero-bg": "url('/assets/img/bg-img.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
