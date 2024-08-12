import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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

          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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

          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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

        /* from shadCN Ui */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      /*       borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }, */
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

      boxShadow: {
        "custom-shadow": "0 0 4px 0 rgba(0, 0, 0, 0.04)",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
