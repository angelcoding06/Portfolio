"use client";
import React from "react";
import { useState } from "react";
import Navlink from "./navlink";
import { useDarkMode } from "../context/DarkModeContext";
import dynamic from "next/dynamic";
import MobileMenu from "../components/mobilemenu";
import { MobileMenuIcon, CloseMobileMenu } from "../components/icons/icons";
// TODO : Fix dynamic import
const DarkModeNoSSR = dynamic(() => import("../components/DarkModeToggle"), {
	ssr: false,
});
const LogoNoSSR = dynamic(() => import("../components/logo"), {
	ssr: false,
});

const navLinks = [
	{
		title: "HOME",
		path: "#home",
	},
	{
		title: "ABOUT",
		path: "#about",
	},
	{
		title: "PROJECTS",
		path: "#projects",
	},
	{
		title: "CONTACT",
		path: "#contact",
	},
];

const Navbar = () => {
	const { modoOscuro, toggleModoOscuro } = useDarkMode();
	const [navbaropen, setOpen] = useState(false);

	const closeMenu = () => {
		setOpen(false);
	};
	return (
		<nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#f0f1f1] bg-opacity-100 shadow-lg dark:bg-[#2c2727] dark:shadow-[#ffffff1b] dark:shadow-md ">
			<div className="container flex flex-wrap items-center justify-between px-5 sm:px-12 py-2 mx-auto lg:py-4 lg:px-28">
				<LogoNoSSR modoOscuro={modoOscuro} />
				<div className="flex items-center animate-pulse px-3 py-2  text-slate-200 hover:text-white hover:border-black dark:border-slate-200 dark:hover:border-white md:hidden">
					{!navbaropen ? (
						<button onClick={() => setOpen(true)}>
							<MobileMenuIcon />
						</button>
					) : (
						<button onClick={() => setOpen(false)}>
							<CloseMobileMenu />
						</button>
					)}
				</div>

				<div className="hidden menu md:block md:w-auto" id="navbar">
					<ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
						{navLinks.map((link, index) => (
							<li key={index}>
								<Navlink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
				<div className="hidden md:flex">
					<DarkModeNoSSR
						modoOscuro={modoOscuro}
						toggleModoOscuro={toggleModoOscuro}
					/>
				</div>
			</div>
			{navbaropen ? (
				<MobileMenu links={navLinks} closeMenu={closeMenu} />
			) : null}
		</nav>
	);
};

export default Navbar;
