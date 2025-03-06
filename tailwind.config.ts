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
        primary: "#2D79B7",
        purple: "#9747FF",
        bgDark: "#020c12",
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
