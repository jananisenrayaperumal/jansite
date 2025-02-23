/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				fadeUp: "fadeUp 0.8s ease-out forwards" // Duration of the animation
			},
			keyframes: {
				fadeUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" }, // Start from below and invisible
					"100%": { opacity: "1", transform: "translateY(0)" } // End at normal position with full opacity
				}
			},
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
