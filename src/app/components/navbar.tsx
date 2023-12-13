import React from "react";
import Link from "next/link";
import Navlink from "./navlink";
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
	return (
		<nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100  ">
			<div className="flex container flex-wrap mx-auto lg:py-4 items-center justify-between px-4 py-2">
				<div>
					logo
				</div>
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
					<button>modooscuro</button>
				</div>
			</div>
		</nav>
	);
}
