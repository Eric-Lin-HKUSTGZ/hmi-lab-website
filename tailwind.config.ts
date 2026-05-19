import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f8",
          100: "#ececf0",
          200: "#d9dae3",
          300: "#b8bacc",
          400: "#8b90ab",
          500: "#66708f",
          600: "#4f5670",
          700: "#3f465c",
          800: "#2b2f3f",
          900: "#1f2230"
        }
      }
    }
  },
  plugins: []
};

export default config;
