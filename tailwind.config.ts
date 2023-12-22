import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				urbanist: ["Urbanist", "sans-serif"],
			},
			screens: {
				xs: "375px",
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
			colors: {
				"mainOrange": "#ff8949",
				"mainWhite": "#f0f1f1",
				"mainBlack": "#2c2727",
				"pageBlack" : "#221e1e"
			},
		},
	},
	plugins: [],
};
export default config;
