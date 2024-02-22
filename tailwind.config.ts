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
      backgroundImage: {
        "theme-dark": "linear-gradient(-45deg, #0c141c 20%, #15202b 80%)",
        "theme-light": "linear-gradient(45deg, #FAF6F0 30%, #FFFBF5 100%)",
        "hero-bg": "url('/assets/img/bg-img.png')",
      },
      colors: {
        darker: {
          "100": "#8899a6",
          "200": "#22303c",
          "300": "#192734",
          "400": "#15202b",
          "500": "#101a23",
          "600": "#0c141c",
        },
        lighter: {
          "100": "#fafafa",
          "200": "#f5f5f5",
          "300": "#e5e5e5",
          "400": "#d4d4d4",
          "500": "#c3c3c3",
          "600": "#b2b2b2",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
