import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="flex justify-between items-center gap-6 p-8 bg-amber-400 sticky top-0 z-50">
			<label className="text-3xl font-extrabold">Janani Senrayaperumal</label>
			<div className="md:hidden">
				<button className="focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
					<div className="space-y-1">
						<div className="w-6 h-0.5 bg-black" />
						<div className="w-6 h-0.5 bg-black" />
						<div className="w-6 h-0.5 bg-black" />
					</div>
				</button>
			</div>
			<div
				className={`${menuOpen
					? "fixed inset-0 bg-amber-500 flex flex-col justify-center items-center gap-6 z-10"
					: "hidden"} md:flex md:static md:gap-6`}
				onClick={() => setMenuOpen(false)}>
				<Link
					to="home"
					duration={200}
					smooth={true}
					offset={-140}
					className="cursor-pointer hover:text-white text-xl"
					onClick={() => setMenuOpen(false)}>
					Home
				</Link>
				<Link
					to="skills"
					smooth={true}
					duration={200}
					offset={-100}
					className="cursor-pointer hover:text-white text-xl"
					onClick={() => setMenuOpen(false)}>
					{" "}Skills
				</Link>
				<Link
					to="projects"
					smooth={true}
					duration={300}
					offset={-120}
					className="cursor-pointer hover:text-white text-xl"
					onClick={() => setMenuOpen(false)}>
					Projects
				</Link>
				<Link
					to="contact"
					smooth={true}
					duration={300}
					offset={-100}
					className="cursor-pointer hover:text-white text-xl"
					onClick={() => setMenuOpen(false)}>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Header;
