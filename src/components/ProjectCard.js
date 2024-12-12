import React from "react";

const ProjectCard = ({ projectInfo }) => {
	const { title, description, image, techStack, links, domain } = projectInfo;
	return (
		<div className="max-w-4xl rounded-lg shadow-lg overflow-hidden bg-white m-4 p-4">
			<div className="flex flex-col p-4 md:flex-row gap-4">
				{/* Project Image */}
				<div>
					<h3 className="text-2xl font-semibold text-gray-800 mb-2">
						{domain}
					</h3>
					<img
						src={image}
						alt="Project"
						className="w-96 h-96 object-fit rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
					/>
				</div>

				{/* Project Details */}
				<div className="p-4 flex flex-col justify-between md:w-1/2">
					<h3 className="text-xl font-semibold text-gray-800 mb-2">
						{title}
					</h3>
					<p className="text-gray-600 text-base mb-4">
						{description}
					</p>

					{/* Tech Stack */}
					<div className="flex flex-wrap space-x-2 mb-4">
						{techStack &&
							techStack.map(tech => {
								return (
									<span className="px-3 py-0.5 text-sm bg-gray-200 text-gray-700 rounded-full m-1">
										{tech}
									</span>
								);
							})}
					</div>

					{/* Links */}
					<div className="flex justify-between items-center">
						<a
							href={links && links.code}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline text-sm">
							Code
						</a>
						<a
							href={links && links.liveDemo}
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
