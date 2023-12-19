"use client";
import React from "react";
import { useState } from "react";
import Navlink from "./navlink";
import { useDarkMode } from "../context/DarkModeContext";
import dynamic from "next/dynamic";
import Logo from "../components/logo";
import MobileMenu from "../components/mobilemenu";
import { MobileMenuIcon, CloseMobileMenu } from "../components/icons/icons";
const DarkModeNoSSR = dynamic(() => import("../components/DarkModeToggle"), {
	ssr: false,
});

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

const Navbar = () => {
	const { modoOscuro, toggleModoOscuro } = useDarkMode();
	const [navbaropen, setOpen] = useState(false);
	// const [checked, setChecked] = useState(modoOscuro);

	// useEffect(() => {
	// 	setChecked(modoOscuro);
	// 	console.log("modoOscuro: ", checked);
	// }, [modoOscuro]);
	const closeMenu = () => {
		setOpen(false); // Esta función cambiará el estado para cerrar el menú móvil
	};
	return (
		<nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#f0f1f1] bg-opacity-100 shadow-lg dark:bg-[#2c2727] dark:shadow-[#ffffff1b] dark:shadow-md ">
			<div className="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto lg:py-4">
				<Logo modoOscuro={modoOscuro} />
				<div className="flex items-center animate-pulse px-3 py-2 border rounded border-gray-950 text-slate-200 hover:text-white hover:border-black dark:border-slate-200 dark:hover:border-white md:hidden">
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
