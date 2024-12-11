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
import df1 from "./project-images/df1.png";
import deere from "./project-images/deere.png";
import scbank from "./project-images/scbank.png";
import MSBing from "./project-images/MSBing.png";

const AppLayout = () => {
	const minecraftInfo = {
		title: "Minecraft",
		description:
			"Built with React, Firebase, and TMDB-API, Crackflix shows a trending movie list with trailers, mimicking the Netflix streaming theme.",
		image: minecraft,
		techStack: ["C++", "Vercel", "TMDB-API", "Firebase"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://www.minecraft.net/en-us/about-minecraft" }
	};
	const neouInfo = {
		title: "Neou-Fitness",
		description:
			"Built with React, Firebase, and TMDB-API, Crackflix shows a trending movie list with trailers, mimicking the Netflix streaming theme.",
		image: neou1,
		techStack: ["React", "Vercel", "TMDB-API", "Firebase"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://bm.neoufitness.com/instructors" }
	};
	const diamondfoundaryInfo = {
		title: "DiamondFoundary - b2b business portal",
		description:
			"Built with React, Firebase, and TMDB-API, Crackflix shows a trending movie list with trailers, mimicking the Netflix streaming theme.",
		image: df1,
		techStack: ["React", "Vercel", "TMDB-API", "Firebase"],
		links: {
			code: "https://github.com/JiyaJanani",
			liveDemo: "https://ameliebellefilledesign.com/casestudy-diamondfoundry-b2b/",
			liveDemo1: "https://portal.diamondfoundry.com/",
			liveDemo2: "https://www.df.com/about-us"
		}
	};
	const johndeereInfo = {
		title: "John Deere  E-commerce",
		description:
			"I developed the cart and checkout module for John Deere’s e-commerce platform, improving responsiveness with mobile-first design and integrating React.js into SAP Hybris for a more dynamic, interactive UI. This boosted performance, especially for mobile users.",
		image: deere,
		techStack: ["React", "SAP Hybris", "Javascript", "CSS", "HTML", "jQuery"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://shop.deere.com/" }
	};
	const MSBingInfo = {
		title: "Microsoft Bing - Grocery and Receipt scanner - Reseach Product",
		description:
			"Built with React, Firebase, and TMDB-API, Crackflix shows a trending movie list with trailers, mimicking the Netflix streaming theme.",
		image: MSBing,
		techStack: ["React", "Vercel", "TMDB-API", "Firebase"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://shop.deere.com/" }
	};
	const SCBankInfo = {
		title: "Standrard Charted Bank - Banking Product",
		description:
			"Built with React, Firebase, and TMDB-API, Crackflix shows a trending movie list with trailers, mimicking the Netflix streaming theme.",
		image: scbank,
		techStack: ["React", "Vercel", "TMDB-API", "Firebase"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://shop.deere.com/" }
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
					title={johndeereInfo.title}
					description={johndeereInfo.description}
					image={johndeereInfo.image}
					techStack={johndeereInfo.techStack}
					links={johndeereInfo.links}
				/>
				<ProjectCard
					title={SCBankInfo.title}
					description={SCBankInfo.description}
					image={SCBankInfo.image}
					techStack={SCBankInfo.techStack}
					links={SCBankInfo.links}
				/>
				<ProjectCard
					title={MSBingInfo.title}
					description={MSBingInfo.description}
					image={MSBingInfo.image}
					techStack={MSBingInfo.techStack}
					links={MSBingInfo.links}
				/>
				<ProjectCard
					title={neouInfo.title}
					description={neouInfo.description}
					image={neouInfo.image}
					techStack={neouInfo.techStack}
					links={neouInfo.links}
				/>
				<ProjectCard
					title={diamondfoundaryInfo.title}
					description={diamondfoundaryInfo.description}
					image={diamondfoundaryInfo.image}
					techStack={diamondfoundaryInfo.techStack}
					links={diamondfoundaryInfo.links}
				/>
				<ProjectCard
					title={minecraftInfo.title}
					description={minecraftInfo.description}
					image={minecraftInfo.image}
					techStack={minecraftInfo.techStack}
					links={minecraftInfo.links}
				/>
			</div>
			<ContactMe />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
