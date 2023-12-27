import React from "react";
import Image from "next/image";
import ProfilePic from "../../../../public/profilepic.jpg";
import { GithubIcon, LinkedInIcon } from "../icons/icons";
import Link from "next/link";
const HomeSection = () => {
	const Title = " I'm Angel.";
	const text =
		"I'm Systems engineering student at National University of Colombia and Jr Front-End developer.";
	return (
		<section className="pt-4 pb-24 sm:py-12 lg:py-48 scroll-my-48" id="home">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<div className="md:pr-12 pb-5 md:pb-0">
					<h1 className="font-extrabold text-black dark:text-white mb-2 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal justify-center">
						<span>Hello!</span>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-mainOrange">
							{Title}
						</span>
					</h1>
					<h2 className=" font-semibold text-black dark:text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal justify-center">
						Building software for humans, one line of code at a time.
					</h2>
					<p className="font-poppins text-black dark:text-white text-base sm:text-lg mb-6 lg:text-xl">
						{text}
					</p>
					<div>
						<div className="flex flex-col items-center sm:items-start md:items-start justify-between lg:flex-row lg:items-center">
							<div className="">
								<Link
									href="#projects"
									className="font-bold px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-500 via-red-500 to-mainOrange hover:bg-slate-200 text-white text-center"
								>
									My Projects
								</Link>

								<Link
									href="#contact"
									className="font-bold px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-mainOrange hover:bg-slate-800 text-white mt-3 text-center"
								>
									<span className="block bg-mainWhite dark:bg-mainBlack rounded-full px-5 py-2 text-black dark:text-white">
										Contact Me
									</span>
								</Link>
							</div>
							<div className="flex mt-4">
								<a
									className="fill-black dark:fill-white"
									href="https://linkedin.com/in/angelcoding06/"
								>
									<LinkedInIcon />
								</a>
								<a
									className="fill-black dark:fill-white"
									href="https://github.com/angelcoding06"
								>
									<GithubIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
				<figure>
					<Image
						src={ProfilePic}
						className="rounded-full shadow-2xl shadow-orange-600 "
						width={250}
						height={250}
						alt="Angel Profile Picture"
						priority={true}
						placeholder="empty"
					/>
				</figure>
			</div>
		</section>
	);
};

export default HomeSection;
