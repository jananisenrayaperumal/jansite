import React from "react";

const ContactLinks = () => {
	return (
		<div className="flex items-center justify-center gap-4 mt-10">
			{/* GitHub */}
			<a
				href="https://github.com/JiyaJanani"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition">
				<span>GitHub</span>
			</a>

			{/* LinkedIn */}
			<a
				href="https://www.linkedin.com/in/jiya-janani/"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center px-4 py-2 bg-linkedin-blue text-white rounded-lg shadow hover:bg-blue-500 transition">
				<span>LinkedIn</span>
			</a>

			{/* Resume */}
			<a
				href="https://drive.google.com/file/d/1yeqEMqk1x8ccr0H22QfoQaJ913jbKe6l/view?usp=sharing"
				target="_blank"
				download
				className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition">
				<span>Resume</span>
			</a>
		</div>
	);
};

export default ContactLinks;
