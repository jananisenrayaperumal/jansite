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
			<div id="__next">
				<Header />
				<About />
				<main id="content" className="pt-24 lg:w-[52%] lg:py-24">
					<Experience />
					<Projects />
				</main>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
