"use client";
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-200 text-black dark:text-gray-300  dark:bg-mainBlack py-8 bg-opacity-100 border-slate-500 transition-all duration-300 ">
			<div className="flex flex-col items-center text-center">
				<p className="font-bold text-black dark:text-white text-base sm:text-lg mb-6 lg:text-2xl">
					Created with passion, powered by creativity.
				</p>
				<p className="font-poppins px-2 text-black dark:text-white text-inherit text-sm  sm:text-lg mb-6 lg:text-lg lg:px-28">
					{
						"I think coding is the closest thing we have like magic, not because we don't know what happens when something goes right or wrong, but because we, as software developers, can create anything and make it seems like magic to people that are not into sotware."
					}
				</p>
				<p className="text-sm mt-4">Thank you for exploring my portfolio.</p>
			</div>
		</footer>
	);
};

export default Footer;
