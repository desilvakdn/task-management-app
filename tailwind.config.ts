import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#00112C",
          800: "#012359",
          700: "#013586",
          600: "#0247B3",
          500: "#0359E0",
          400: "#3278E5",
          300: "#6298EB",
          200: "#92B7F1",
          100: "#C2D7F7",
          50: "#F2F6FD",
        },
        secondary: {
          900: "#00272C",
          800: "#014F59",
          700: "#017786",
          600: "#029FB3",
          500: "#03C7E0",
          400: "#32D1E5",
          300: "#62DCEB",
          200: "#92E6F1",
          100: "#C2F1F7",
          50: "#F2FCFD",
        },
        tertiary: {
          900: "#322807",
          800: "#66500E",
          700: "#997916",
          600: "#CCA11D",
          500: "#FFCA25",
          400: "#FFD44E",
          300: "#FFDE77",
          200: "#FFE8A1",
          100: "#FFF2CA",
          50: "#FFFCF4",
        },
        dark: {
          900: "#050505",
          800: "#0B0B0B",
          700: "#101010",
          600: "#161616",
          500: "#1C1C1C",
          400: "#474747",
          300: "#727272",
          200: "#9D9D9D",
          100: "#C8C8C8",
          50: "#EFEFEF",
        },
        danger: {
          500: "#CB2E27",
          50: "#FCF4F4",
        },
        warning: {
          500: "#FFAD0D",
          50: "#FFFAF2",
        },
        success: {
          500: "#2A7E2E",
          50: "#F4F8F4",
        },
        info: {
          500: "#0C6FBF",
          50: "#F2F7FB",
        },
        black: "#1C1C1C",
        white: "#FFFFFF",
        whiteBg: "#F6F6F6",
      },
      boxShadow: {
        "custom-shadow": "0 0 4px 0 rgba(0, 0, 0, 0.04)",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
};
export default config;
