import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactMe = () => {
	return (
		<section id="contact" className="bg-amber-400 py-6">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold mb-2">Contact Me</h2>
				<p className="mb-4 text-lg">
					I would love to hear from you! Feel free to reach out for any inquiries or collaborations.
				</p>

				<div className="flex md:flex-row justify-center flex-col items-center gap-6 sm:gap-3 ">
					<div className="flex items-center space-x-3">
						<FaEnvelope className="text-xl text-gray-700" />
						<a href="mailto:jansen@gmail.com" className="text-lg hover:underline">
							jansen@gmail.com
						</a>
					</div>
					<div className="flex items-center space-x-3">
						<FaPhoneAlt className="text-xl text-gray-700" />
						<a href="tel:+1234567890" className="text-lg hover:underline">
							+1 (234) 567-890
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
