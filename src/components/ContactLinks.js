import React from "react";

const ContactLinks = () => {
	return (
		<div className="flex items-center justify-center gap-4 mt-10">
			{/* GitHub */}
			<a
				href="https://github.com/jananisenrayaperumal"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition">
				<span>GitHub</span>
			</a>

			{/* LinkedIn */}
			<a
				href="https://www.linkedin.com/in/jananisenrayaperumal/"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center px-4 py-2 bg-linkedin-blue text-white rounded-lg shadow hover:bg-blue-500 transition">
				<span>LinkedIn</span>
			</a>

			{/* Resume */}
			<a
				href="https://docs.google.com/document/d/e/2PACX-1vTRpb06in5BxOebhJABv2L-EOgKoSUXRRzJzG0_EiAwMWLP1xBM5MMk_NnXTbVLsJHS2S-Nx0pwRBXs/pub"
				target="_blank"
				download
				className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition">
				<span>Resume</span>
			</a>
		</div>
	);
};

export default ContactLinks;
