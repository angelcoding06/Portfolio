"use client";
import React from "react";
import {
	NextJsIcon,
	ReactIcon,
	HtmlIcon,
	CssIcon,
	JavascriptIcon,
	TypescriptIcon,
	TailwindIcon,
	ViteIcon,
	PythonIcon,
	GitIcon,
	DockerIcon,
	LinuxIcon,
} from "../icons/icons";
import SkillsCard from "../skillscard";
import Unal from "../../../../public/UNAL.svg";
import Image from "next/image";
const Aboutsection = () => {
	return (
		<section
			className="flex flex-col justify-between scroll-my-28 py-12 border-solid border-t-2 border-orange-600 "
			id="about"
		>
			<h1 className="font-extrabold text-center text-black dark:text-white mb-8 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal justify-center">
				About
			</h1>
			<div className="flex flex-col items-center content-center justify-between">
				<p className="font-poppins text-black dark:text-white text-base sm:text-lg mb-6 lg:text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta commodi
					ullam reiciendis quo accusantium cupiditate. Nulla, minima sint cumque
					architecto molestias iure laborum quasi ab ipsa fuga, voluptatem
					impedit in!
				</p>
				<div className="flex flex-col items-center gap-7 md:gap-14 mt-16 ">
					<h2 className=" font-semibold md:text-3xl hover:text-black dark:text-white">
						Skills
					</h2>
					<ul className="list-none  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-black dark:text-white ">
						<SkillsCard icon={<HtmlIcon />} />
						<SkillsCard icon={<CssIcon />} />
						<SkillsCard icon={<TailwindIcon />} />
						<SkillsCard icon={<JavascriptIcon />} />
						<SkillsCard icon={<TypescriptIcon />} />
						<SkillsCard icon={<ReactIcon />} />
						<SkillsCard icon={<NextJsIcon />} />
						<SkillsCard icon={<ViteIcon />} />
						<SkillsCard icon={<PythonIcon />} />
						<SkillsCard icon={<GitIcon />} />
						<SkillsCard icon={<DockerIcon />} />
						<SkillsCard icon={<LinuxIcon />} />
					</ul>
				</div>
				<div className="flex flex-col items-center gap-7 md:gap-14 mt-16 ">
					<h2 className=" font-semibold md:text-3xl hover:text-black dark:text-white">
						Education
					</h2>
					<div className="flex flex-col lg:flex-row items-center justify-between">
						<picture className="justify-center items-center">
							<Image
								src={Unal}
								alt="UNAL Logo"
								width={250}
								height={100}
								priority={true}
								placeholder="empty"
								className="md:max-w-1/2 lg:max-w-screen-md lg:max-h-screen" // Tailwind classes for width
							/>
						</picture>
						<div className="flex flex-col pt-10 lg:pt-0 lg:pl-36">
							<h3 className="font-semibold pb-4 text-xl md:text-2xl hover:text-black dark:text-white">
								National University of Colombia
							</h3>
							<p className="font-poppins text-black dark:text-white text-base sm:text-lg lg:text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
								numquam commodi deleniti ipsam, tempora minima vel architecto
								eum! Porro debitis illum nobis earum quae reiciendis similique
								excepturi distinctio modi totam.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center gap-7 md:gap-14 mt-8 ">
					<h2 className=" font-semibold md:text-xl hover:text-black dark:text-white">
						Certifications
					</h2>
					<ul className="list-none pl-2 grid grid-flow-col gap-4 text-black dark:text-white">
						<li>Fullstack Academy of Code</li>
						<li>University of California, Santa Cruz</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
export default Aboutsection;
