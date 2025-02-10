import anime from "../img/women-avatar.avif";
import janImg from "../img/women-avatar.jpeg";
import { TypeAnimation } from "react-type-animation";
import ContactLinks from "./ContactLinks";

const Body = () => {
	return (
		<div
			id="home"
			className="grid w-full gap-8 items-center justify-center 
                grid-cols-1 md:grid-cols-[auto_auto] md:gap-16">
			{/* Text and Animation Section */}
			<div className="text-center pt-4 w-full md:text-left md:w-[450px] lg:w-[450px] flex flex-col justify-center items-center">
				<TypeAnimation
					sequence={[
						"I craft web experiences",
						1000,
						"I build digital solutions",
						1000,
						"I bring ideas to life",
						1000,
						"I am always learning",
						1000,
						"I am a cat parent",
						1000
					]}
					speed={50}
					style={{ fontSize: "2em" }}
					repeat={Infinity}
					className=""
				/>
				{/* <ContactLinks /> */}
			</div>
		</div>
	);
};

export default Body;
