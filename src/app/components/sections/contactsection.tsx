"use client";
import Link from "next/link";
import React from "react";
import { GmailIcon, GithubIcon, LinkedInIcon } from "../icons/icons";
const ContactSection = () => {
	return (
		<section
			className="flex flex-col justify-between scroll-my-28 py-12 border-solid border-t-2 border-orange-600 "
			id="contact"
		>
			<h1 className="font-extrabold text-center text-mainOrange mb-8 text-4xl lg:text-5xl lg:leading-normal justify-center">
				Contact
			</h1>
			<p className="font-poppins text-black dark:text-white text-base sm:text-lg mb-6 lg:text-xl">
				I'm currently looking for new opportunities, my inbox is always open.
				Whether you have a question or just want to say hi, I'll try my best to
				get back to you! You can reach me at the links below.
			</p>
			<div className="flex flex-col sm:flex-row justify-between">
				<div className="mb-4">
					<Link
						href="https://drive.google.com/file/d/1c-avHkq6fqZyGdsWydgcoiObrQbfvzkx/view?usp=sharing"
						className="font-bold px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-mainOrange  text-white text-center"
						target="blank"
					>
						MY CV
					</Link>
				</div>
				<div className="flex w-auto">
					<a
						href="mailto:anvasquezge@gmail.com"
						target="blank"
						className="fill-black dark:fill-white"
					>
						{" "}
						<GmailIcon />{" "}
					</a>
					<a
						href="https://github.com/angelcoding06"
						className="fill-black dark:fill-white"
						target="blank"
					>
						<GithubIcon width="100" />
					</a>
					<a
						href="https://www.linkedin.com/in/angelcoding06/"
						className="fill-black dark:fill-white"
						target="blank"
					>
						<LinkedInIcon width="100" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
