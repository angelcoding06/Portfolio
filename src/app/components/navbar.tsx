"use client";
import React from "react";
import Link from "next/link";
import Navlink from "./navlink";
import DarkModeToggle from "./DarkModeToggle";
import useDarkMode from "../hooks/useDarkMode";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("../components/DarkModeToggle"), { ssr: false });

const navLinks = [
	{
		title: "Home",
		path: "#home",
	},
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

export default function Navbar() {
	const { modoOscuro, toggleModoOscuro } = useDarkMode();
	return (
		<nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100 shadow-lg dark:bg-[#2c2727] dark:shadow-[#ffffff1b] dark:shadow-md ">
			<div className="flex container flex-wrap mx-auto lg:py-4 items-center justify-between px-4 py-2">
				<div>logo</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<Navlink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
				<div>
					<NoSSR modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />
				</div>
			</div>
		</nav>
	);
}
