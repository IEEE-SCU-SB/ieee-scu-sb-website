import type {Config} from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
				"reveal": "reveal 1s linear forwards",
				"gradient-slide": "gradientSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"fade-in": "fadeIn 0.5s ease-out forwards",
			},
			keyframes: {
				reveal: {
					to: {
						clipPath: "inset(0 0 0 0)",
					},
				},
				gradientSlide: {
					"0%": {
						backgroundPosition: "200% center",
					},
					"100%": {
						backgroundPosition: "0% center",
					},
				},
				fadeIn: {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
		},
	},
	darkMode: ["selector"],
};
export default config;
