const AboutMe = () => {
	return (
		<section className="max-w-3xl mx-auto p-4 text-center mt-12">
			<h2 className="text-2xl font-bold mb-4">Hi, I am Janani Senrayaperumal!</h2>
			<p className="text-lg mb-4">
				I am a self-taught Front-End Developer with 7+ years of experience. I specialize in building clean, responsive
				websites using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>,
				and <strong>Tailwind CSS</strong>.
			</p>
			<p className="text-lg mb-4">
				I am dedicated to crafting seamless, user-centric experiences while continuously expanding my skill set and
				knowledge of emerging tools. I enjoy developing innovative solutions. Outside of coding, I thrive in
				collaborative environments, working with teams to transform ideas into reality
			</p>
			<p className="text-lg">
				Feel free to reach out on{" "}
				<a href="https://www.linkedin.com/in/jiya-janani/" className="text-linkedin-blue hover:underline">
					LinkedIn
				</a>{" "}
				or send me an email{" "}
				<a
					href="mailto:jananisenrayaperumal@gmail.com"
					className="text-black cursor-pointer font-semibold hover:underline">
					jananisenrayaperumal@gmail.com
				</a>{" "}
				I would love to connect!
			</p>
		</section>
	);
};

export default AboutMe;
