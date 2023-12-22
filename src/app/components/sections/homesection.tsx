import React from "react";
import Image from "next/image";
import ProfilePic from "../../../../public/profilepic.jpg";
import Link from "next/link";
const HomeSection = () => {
	const Title = " I'm Angel.";
	const text =
		"I'm Systems engineering student at National University of Colombia and Jr Front-End developer.";
	return (
		<section className="pt-4 pb-16 sm:py-12 lg:py-32 scroll-my-48" id="home">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<div className="md:pr-12 pb-5 md:pb-0">
					<h1 className="font-extrabold text-black dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal justify-center">
						<span>Hello!</span>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-[#ff8949]">
							{Title}
						</span>
					</h1>
					<p className="font-poppins text-black dark:text-white text-base sm:text-lg mb-6 lg:text-xl">
						{text}
					</p>
					<div>
						<Link
							href="#projects"
							className="font-bold px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-500 via-red-500 to-[#ff8949] hover:bg-slate-200 text-white text-center"
						>
							My Projects
						</Link>

						<Link
							href="#contact"
							className="font-bold px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-[#ff8949] hover:bg-slate-800 text-white mt-3 text-center"
						>
							<span className="block bg-[#f0f1f1] dark:bg-[#2c2727] rounded-full px-5 py-2 text-black dark:text-white">
								Contact Me
							</span>
						</Link>
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
