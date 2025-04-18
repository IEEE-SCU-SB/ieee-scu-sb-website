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
        "background": "rgb(var(--background) / <alpha-value>)",
        "foreground": "rgb(var(--foreground) / <alpha-value>)",
        "primary": "rgb(var(--primary) / <alpha-value>)",
        "primary-muted": "rgb(var(--primary-muted) / <alpha-value>)",
        "purple": "rgb(var(--purple) / <alpha-value>)",
        "purple-muted": "rgb(var(--purple-muted) / <alpha-value>)",
        "border": "rgb(var(--border) / <alpha-value>)",
      },
      animation: {
        reveal: "reveal 1s linear forwards",
      },
      keyframes: {
        reveal: {
          to: {
            clipPath: "inset(0 0 0 0)",
          },
        },
      },
    },
  },
  darkMode: ["selector"],
};
export default config;
