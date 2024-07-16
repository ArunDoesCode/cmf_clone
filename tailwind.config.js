/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				green: "#a3a7a4",
				white: "#ffffff",
				half_white: "#e1e4ea",
				orange: "#fb471f",
				dark_grey: "#424b54",
			},
			fontFamily: {
				ndot55 : ['Ndot55 ', 'sans-serif'],
				letteraMonoLL: ['LetteraMonoLL', 'monospace'],
				franklinGothicBook: ['FranklinGothicBook', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
