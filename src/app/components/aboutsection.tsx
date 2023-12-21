"use client";
import React from "react";
import { useState, useTransition } from "react";
import AboutButton from "./aboutbutton";
const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-none pl-2 grid grid-cols-2 gap-4 text-black dark:text-white">
				<li>ReactJS</li>
				<li>HTML5</li>
				<li>CSS</li>
				<li>Tailwindcss</li>
				<li>JavaScript</li>
				<li>Typescript</li>
				<li>NextJs</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-none pl-2 grid grid-flow-col gap-4 text-black dark:text-white">
				<li>Fullstack Academy of Code</li>
				<li>University of California, Santa Cruz</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-none pl-2 grid grid-flow-col gap-4 text-black dark:text-white">
				<li>AWS Cloud Practitioner</li>
				<li>Google Professional Cloud Developer</li>
			</ul>
		),
	},
];

const Aboutsection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();
	isPending;
	const handleTabChange = (id:string) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<section
			className="flex flex-col justify-between scroll-my-48 py-12 border-solid border-t-2 border-orange-600 "
			id="about"
		>
			<h1 className="font-extrabold text-center text-black dark:text-white mb-8 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal justify-center">
				About
			</h1>
			<div className="flex flex-col items-center content-center justify-between">
				<p className="font-poppins text-black dark:text-white text-base sm:text-lg mb-6 lg:text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta commodi
					ullam reiciendis quo accusantium cupiditate. Nulla, minima sint cumque
					architecto molestias iure laborum quasi ab ipsa fuga, voluptatem
					impedit in!
				</p>
				<div className="flex flex-row justify-start mt-8">
					<AboutButton
						selectTab={() => handleTabChange("skills")}
						active={tab === "skills"}
					>
						Skills
					</AboutButton>
					<AboutButton
						selectTab={() => handleTabChange("education")}
						active={tab === "education"}
					>
						{" "}
						Education{" "}
					</AboutButton>
					<AboutButton
						selectTab={() => handleTabChange("certifications")}
						active={tab === "certifications"}
					>
						{" "}
						Certifications{" "}
					</AboutButton>
				</div>
				<div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
			</div>
		</section>
	);
};
export default Aboutsection;
