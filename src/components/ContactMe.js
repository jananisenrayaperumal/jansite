import React from "react";

const ContactMe = () => {
	return (
		<section className="bg-amber-400 py-14 mt-4">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold mb-6">Contact Me</h2>
				<p className="mb-12 text-lg">
					I would love to hear from you! Feel free to reach out for any inquiries or collaborations.
				</p>

				<div className="flex justify-center space-x-10">
					<div className="flex items-center space-x-3">
						<span className="text-3xl">📧</span>
						<a href="mailto:jansen@gmail.com" className="text-lg hover:underline">
							jansen@gmail.com
						</a>
					</div>
					<div className="flex items-center space-x-3">
						<span className="text-3xl">📞</span>
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
