import React from "react";
import NavLink from "./navlink";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../context/DarkModeContext";
type linkprops = {
	links: {
		title: string;
		path: string;
	}[];
	closeMenu: () => void;
};
const MobileMenu: React.FC<linkprops> = ({ links, closeMenu }) => {
	const { modoOscuro, toggleModoOscuro } = useDarkMode();
	return (
		<aside className="flex flex-row justify-between mx-auto md:hidden">
			<ul className="flex flex-col items-left pl-12">
				{links.map((link, index) => (
					<li key={index}>
						<NavLink
							href={link.path}
							title={link.title}
							function1={closeMenu}
						/>
					</li>
				))}
			</ul>
			<div className="pr-12">
				<DarkModeToggle
					modoOscuro={modoOscuro}
					toggleModoOscuro={toggleModoOscuro}
				/>
			</div>
		</aside>
	);
};

export default MobileMenu;
