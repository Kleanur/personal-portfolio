import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "foreground-rgb": 'rgb(var(--foreground-rgb) / <alpha-value>)',
        "background-rgb": 'rgb(var(--background-rgb) / <alpha-value>)',
        "accent-rgb": 'rgb(var(--accent-rgb) / <alpha-value>)',
        "accent2-rgb": 'rgb(var(--accent2-rgb) / <alpha-value>)',
        "highlight-rgb": 'rgb(var(--highlight-rgb) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
