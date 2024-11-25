import React from "react";
import { useState } from "react";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="flex justify-between items-center gap-6 p-10 bg-amber-400">
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
				<label className="cursor-pointer hover:text-white text-xl" onClick={() => setMenuOpen(false)}>
					Home
				</label>
				<label className="cursor-pointer hover:text-white text-xl" onClick={() => setMenuOpen(false)}>
					About
				</label>
				<label className="cursor-pointer hover:text-white text-xl" onClick={() => setMenuOpen(false)}>
					Project
				</label>
				<label className="cursor-pointer hover:text-white text-xl" onClick={() => setMenuOpen(false)}>
					Contact
				</label>
			</div>
		</div>
	);
};

export default Header;
