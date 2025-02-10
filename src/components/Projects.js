import React from "react";

const Projects = () => {
	return (
		<section id="projects" className="mb-16 md:mb-24 lg:mb-36">
			<div>
				<h2 className="text-2xl font-bold text-slate-200">Projects</h2>
				<p className="mt-4 text-sm text-slate-400">
					Here are some of the projects I’ve worked on. Feel free to explore and see what I’ve built!
				</p>
				<ul className="mt-6 space-y-4">
					<li>
						<a href="https://github.com/bchiang7" className="text-teal-400 hover:text-teal-300">
							Project 1: Klaviyo
						</a>
						<p className="text-sm text-slate-400">A powerful email marketing platform with advanced segmentation.</p>
					</li>
					{/* Add more projects as needed */}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
