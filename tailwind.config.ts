import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
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
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      addCommonColors: true,
    }),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
