/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				niramit: ["Niramit", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"primary-green": "#c3f991",
				"secondary-green": "#30db9e",
				"light-green": "#f8ffe3",
				"light-blue": "#9ce1ff",
				"dark-green": "#1f3032",
				"dark-blue": "#202f31",
				"gray-text": "#454545",
				"light-gray": "#989898",
			},
		},
	},
	plugins: [],
};
