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
import sarvamImg from "./project-images/sarvam.webp";

const AppLayout = () => {
	const sarvamAIInfo = {
		domain: "AI-driven Applications",
		title: "Sarvam AI",
		description:
			"Developed dynamic, runtime response-based UIs for Sarvam AI applications, including a travel app that adapts its UI based on LLM responses. Additionally, worked on Tution Anna, an educational app that highlights key sections of PDFs for improved learning. Built an interactive dashboard UI to visualize data from running apps and LLMs, enhancing decision-making and user interaction.",
		image: sarvamImg,
		techStack: ["React", "TailwindCSS", "WebSocket", "LLM"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://www.sarvam.ai/" }
	};

	const minecraftInfo = {
		title: "Minecraft",
		domain: "Gaming",
		description:
			"Developed a trial version of Minecraft, including hints screens for Survival and Creative modes that appear as the game progresses. Packaged the game as a free trial version to allow players to experience key features. Conducted extensive developer testing on multiple platforms, including Windows, Android, iOS, Xbox, PlayStation, VR, and Nintendo, ensuring smooth gameplay and compatibility across devices.",
		image: minecraft,
		techStack: ["C++", "Java", "Unity"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://www.minecraft.net/en-us/about-minecraft" }
	};
	const neouInfo = {
		title: "Neou",
		domain: "Fitness Web-app",
		description:
			"Developed a scalable, high-performance web solution for Neou Fitness, focusing on a content management system (CMS). I designed the core structure and built reusable UI components. Implemented a secure sign-in flow with Firebase authentication, enabling Google and Apple logins. Integrated Stripe for Apple Pay and Google Pay to streamline payments. Also, added Segment for user activity tracking, enabling data-driven decisions. Mentored junior developers to foster collaboration and enhance team performance.",
		image: neou1,
		techStack: ["React", "Typescript", "Jenkins", "Redux-saga", "Webpack"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://bm.neoufitness.com/instructors" }
	};
	const diamondfoundaryInfo = {
		domain: "B2B business portal",
		title: "DiamondFoundary",
		description:
			"Developed a B2B portal for Diamond Foundry to monitor real-time inventory and sales. The portal enables wholesale businesses to easily browse diamonds, place bulk orders, and access specific pricing and features based on customer accounts. Designed a seamless experience across devices, incorporating user-specific filters and secure login. The portal has helped increase sales and streamline operations, generating over half a million in sales within the first six months.",
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
		title: "John Deere",
		domain: " E-commerce",
		description:
			"Improved the cart and checkout module for John Deere’s e-commerce platform by integrating React.js into SAP Hybris, enhancing the dynamic and interactive nature of the UI. Leveraged microfrontend architecture to improve modularity and scalability. Focused on boosting responsiveness with a mobile-first design approach, significantly enhancing performance for mobile users. This resulted in faster load times and an overall better user experience across devices.",
		image: deere,
		techStack: ["React", "SAP Hybris", "Javascript", "CSS", "HTML", "jQuery"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://shop.deere.com/" }
	};
	const MSBingInfo = {
		title: "Microsoft Bing - Grocery and Receipt scanner ",
		domain: "Reseach Work",
		description:
			"This was a research-based project, initially developed in React Native and later converted into a Progressive Web App (PWA). It incorporates mobile camera functionality within the web app for scanning grocery receipts and offering cashback. Deployed as a mini-app inside the Bing browser, it has now been released as a cashback feature in Microsoft Edge, providing users with a unique and seamless experience across platforms.",
		image: MSBing,
		techStack: ["React", "React-Native", "Hooks", "Azure", "SASS", "React-Contect", "ReSub"],
		links: { code: "https://github.com/JiyaJanani", liveDemo: "https://shop.deere.com/" }
	};
	const SCBankInfo = {
		title: "Standrard Charted Bank",
		domain: "Banking Product",
		description:
			"Developed the credit and debit card management module for Standard Chartered Bank, enhancing user experience and integration. Used React and GraphQL to optimize performance and streamline data fetching. Applied TailwindCSS for a mobile-first, responsive design. Focused on security, implementing safe data handling practices, and comprehensive integration tests for reliability, performance, and quality assurance.",
		image: scbank,
		techStack: ["React", "Typescript", "Javascript", "GraphQL", "Rest-API", "TailwindCSS"],
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
				<ProjectCard projectInfo={sarvamAIInfo} />
				<ProjectCard projectInfo={johndeereInfo} />
				<ProjectCard projectInfo={SCBankInfo} />
				<ProjectCard projectInfo={MSBingInfo} />
				<ProjectCard projectInfo={neouInfo} />
				<ProjectCard projectInfo={diamondfoundaryInfo} />
				<ProjectCard projectInfo={minecraftInfo} />
			</div>
			<ContactMe />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
