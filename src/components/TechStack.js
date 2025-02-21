const skills = [
	"React",
	"Angular",
	"Tailwind CSS",
	"JavaScript",
	"Node.js",
	"AWS(EC2-S3)",
	"TypeScript",
	"Next.js",
	"SCSS",
	"Redux",
	"HTML5",
	"CSS3",
	"GraphQL",
	"SQL",
	"Webpack",
	"Azure",
	"React-Testing"
];

const importantSkills = [
	"React",
	"Tailwind CSS",
	"JavaScript",
	"Node.js",
	"TypeScript",
	"Next.js",
	"GraphQL",
	"AWS",
	"Redux",
	"MySQL",
	"Jest",
	"Cypress"
];

const SkillCard = ({ skill, isImportant, isWide }) => {
	return (
		<div
			className={`flex flex-col items-center justify-center text-gray-800 text-sm font-medium text-center
        ${isImportant ? "bg-gray-200 border-slate-400" : "bg-gray-100 border-gray-300"}
        py-3 px-5 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border
        ${isImportant ? "mb-2" : "mb-2"} // Adjust margin for important skills
        ${isWide ? "col-span-2" : "col-span-1"} // Make wide cards span 2 columns
      `}>
			<span>
				{skill}
			</span>
		</div>
	);
};

const Skills = () => {
	return (
		<section>
			{/* Title Section */}
			<h2 id="projects" className="text-3xl font-bold text-center m-2 mb-4 text-gray-800">
				Skills
			</h2>

			{/* Skills Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-screen-lg mx-auto grid-flow-row-dense">
				{skills.map((skill, index) =>
					<SkillCard
						key={index}
						skill={skill}
						isImportant={importantSkills.includes(skill)} // Highlight important skills
						isWide={index % 3 === 0} // Make every third skill card wide
					/>
				)}
			</div>
		</section>
	);
};

export default Skills;
