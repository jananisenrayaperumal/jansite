/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				linkedin: {
					blue: "#0077B5",
					dark: "#343434",
					lightGray: "#f3f6f9"
				}
			}
		}
	},
	plugins: []
};
