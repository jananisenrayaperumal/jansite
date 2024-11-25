import anime from "../img/women-avatar.avif";
import janImg from "../img/women-avatar.jpeg";
import { TypeAnimation } from "react-type-animation";
import ContactLinks from "./ContactLinks";

const Body = () => {
	return (
		<div className="grid grid-flow-col w-full grid-cols-[40%_60%x] gap-10 items-center justify-center mt-10">
			<div className="w-52 h-52 bg-gray-700 rounded-full shadow-lg overflow-hidden">
				<img
					className="w-full h-full border-4 object-cover object-top rounded-full border-gray-800"
					src={janImg}
					alt="circle"
				/>
			</div>

			<div className="text-center pt-4 w-[500px]">
				<TypeAnimation
					sequence={[
						// Same substring at the start will only be typed once, initially
						"I am a web developer",
						1000,
						"I am a influener",
						1000,
						"I am a cat parent",
						1000,
						"I am a traveller",
						1000,
						"I am a animal lover",
						1000,
						"I am a good human being!!",
						1000
					]}
					speed={50}
					style={{ fontSize: "2em" }}
					repeat={Infinity}
					className=""
				/>
				<ContactLinks />
			</div>
		</div>
	);
};

export default Body;
