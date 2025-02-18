import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const AppLayout = () => {
	return (
		<div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
			<div id="__next" className="flex justify-between">
				<div className="lg:w-[48%]">
					<Header />
				</div>
				<main className="lg:w-[48%] pt-32 pr-14">
					<About />
					<Experience />
					<Experience />
					<Experience />
					<Experience />
					<Projects />
				</main>
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
