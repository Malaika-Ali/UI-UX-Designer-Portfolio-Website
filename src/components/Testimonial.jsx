import React from "react";
import PropTypes from "prop-types";


const testimonialList = [
	{
		author: {
			fullName: "Sara Kim",
			picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
			designation: "Founder UI kits",
		},
		rating: 3.5,
		description:
			"Marry's UI/UX skills are top-notch, and we look forward to collaborating with her again in the future.",
	},
	{
		author: {
			fullName: "Kim Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
			designation: "Business Head",
		},
		rating: 3.8,
		description:
			"Marry's UX expertise helped us revamp our app. Her design solutions were innovative and user-friendly. ",
	},
	{
		author: {
			fullName: "David Brown",
			picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
			designation: "Business Owner",
		},
		rating: 4.5,
		description:
			"Marry's design work was exceptional. She transformed our complex requirements into elegant solutions.",
	},
];

const TestimonialItem = ({ testimonial }) => (
	<div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6">
		<div className="mt-4">
			<p className="opacity-50 mb-6">{testimonial.description}</p>
			<div className="flex items-center">
				<div className="mr-2">
					<img
						src={testimonial.author.picture}
						alt={testimonial.author.fullName}
						className="max-w-full h-auto rounded-full border"
						width="47"
					/>
				</div>
				<div>
					<h4 className="text-xl font-medium">{testimonial.author.fullName}</h4>
					<p className="text-sm">
						{testimonial.author.designation}
					</p>
				</div>
			</div>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial = () => {
	return (
		<section id="reviews" className="ezy__testimonial1 light py-14 md:py-24 bg-background text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center md:mb-6">
					<div className="sm:max-w-lg text-center">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
							Client Reviews
						</h2>
						<p>
						Client feedback speaks volumes about our services.

						</p>
					</div>
				</div>
				<div className="grid grid-cols-6 gap-6 pt-8">
					{testimonialList.map((testimonial, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<TestimonialItem testimonial={testimonial} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonial;