import React, { useEffect, useRef, useState } from "react";

const skills = [
	{ name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
	{
		name: "TypeScript",
		logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
	},
	{
		name: "React",
		logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
	},
	{ name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
	{ name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
	{ name: "TailwindCSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
	{ name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
	{
		name: "Express",
		logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
	},
	{
		name: "NodeJS",
		logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
	},
	{ name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
	{ name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" },
	{ name: "ReactNative", logo: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },
	{ name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
	{ name: "Redux", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
	{ name: "Sass", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },
	{ name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
	{ name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
	{ name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
	{
		name: "MaterialUI",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
	},
	{ name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
	{ name: "Redux", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
	{ name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
	{ name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
	{ name: "Ant Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" },
	{
		name: "MySQL",
		logo:
			"https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg"
	},
	{ name: "Mongo DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
	{ name: "Heroku", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" },
	{ name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" }
];

// On-Load and On-Hover animation for Skill Cards
const SkillCard = ({ skill, logo }) => {
	const cardRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.25 }
		); // Trigger animation when 50% of the element is visible
		if (cardRef.current) observer.observe(cardRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={cardRef}
			className={`py-2 px-5 bg-gray-50 mx-2 mt-6 rounded-lg flex items-center justify-center w-32 md:w-40 transition-all duration-500 ease-in-out transform ${isVisible
				? "opacity-100 translate-y-0"
				: "opacity-0 translate-y-8"} hover:scale-105 cursor-pointer hover:bg-gray-200 hover:text-blue-600`}>
			<img src={logo} alt={skill} className="w-10" />
			<h4 className="text-base font-medium ml-3">
				{skill}
			</h4>
		</div>
	);
};

const Skills = () => {
	return (
		<div className="my-10">
			{/* Title Section */}
			<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">My Technical Skills</h2>

			{/* Skills Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-screen-lg mx-auto mt-8">
				{skills.map((skill, index) => <SkillCard key={index} skill={skill.name} logo={skill.logo} />)}
			</div>
		</div>
	);
};

export default Skills;
