import React from "react";

const ProjectCard = ({ title, description, image, techStack, links }) => {
	return (
		<div className="max-w-4xl rounded-lg shadow-lg overflow-hidden bg-white m-4 p-4">
			<div className="flex flex-col md:flex-row gap-4">
				{/* Project Image */}
				<img
					src={image}
					alt="Project"
					className="md:w-1/2 h-56 object-cover object-top object-fit rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-110"
				/>{" "}
				{/* Project Details */}
				<div className=" p-4 flex flex-col justify-between md:w-1/2">
					<h3 className="text-xl font-semibold text-gray-800 mb-2">
						{title}
					</h3>
					<p className="text-gray-600 text-base mb-4">
						{description}
						{description}
					</p>

					{/* Tech Stack */}
					<div className="flex flex-wrap space-x-2 mb-4">
						<span className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">React</span>
						<span className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">Vercel</span>
						<span className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">TMDB-API</span>
						<span className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">Firebase</span>
					</div>

					{/* Links */}
					<div className="flex justify-between items-center">
						<a
							href="https://github.com/your-repo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline text-sm">
							Code
						</a>
						<a
							href="https://your-live-demo.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline text-sm">
							Live Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
