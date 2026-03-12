import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f4f6",
          100: "#e5e7eb",
          500: "#1c2129",
          600: "#12151b",
          700: "#0b0d11",
        },
        accent: {
          500: "#d72d25",
          600: "#b1211a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
