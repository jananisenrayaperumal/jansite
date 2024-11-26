import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import TechStack from "./components/TechStack";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import ContactMe from "./components/ContactMe";
import neou1 from "./project-images/neou2.png";
import minecraft from "./project-images/minecraft.png";

const AppLayout = () => {
	const project1 = {
		title: "Crackflix-GPT 2",
		description:
			"Built with React, Firebase, and TMDB-API, Crackflix shows a trending movie list with trailers, mimicking the Netflix streaming theme.",
		image: neou1,
		techStack: ["React", "Vercel", "TMDB-API", "Firebase"],
		links: { code: "https://github.com/your-repo", liveDemo: "https://bm.neoufitness.com/instructors" }
	};
	const project2 = {
		title: "Crackflix-GPT 2",
		description:
			"Built with React, Firebase, and TMDB-API, Crackflix shows a trending movie list with trailers, mimicking the Netflix streaming theme.",
		image: minecraft,
		techStack: ["React", "Vercel", "TMDB-API", "Firebase"],
		links: { code: "https://github.com/your-repo", liveDemo: "https://bm.neoufitness.com/instructors" }
	};
	return (
		<div className="app bg-stone-50">
			<Header />
			<div className="flex flex-col justify-center items-center">
				<Body />
				<AboutMe />
				<TechStack />
				<h2 id="projects" className="text-3xl font-bold text-center m-4 text-gray-800">
					Projects
				</h2>
				<ProjectCard
					title={project2.title}
					description={project2.description}
					image={project2.image}
					techStack={project2.techStack}
					links={project2.links}
				/>
				<ProjectCard
					title={project1.title}
					description={project1.description}
					image={project1.image}
					techStack={project1.techStack}
					links={project1.links}
				/>
				<ProjectCard
					title={project2.title}
					description={project2.description}
					image={project2.image}
					techStack={project2.techStack}
					links={project2.links}
				/>
			</div>
			<ContactMe />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
