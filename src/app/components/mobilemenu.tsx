import React from "react";
import NavLink from "./navlink";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../context/DarkModeContext";
type linkprops = {
	links: {
		title: string;
		path: string;
	}[],
	closeMenu: () => void;
};
const MobileMenu: React.FC<linkprops> = ({ links, closeMenu }) => {
	const { modoOscuro, toggleModoOscuro } = useDarkMode();
	return (
		<div className="flex flex-col md:hidden">
			<div className="pl-4">
				<DarkModeToggle
					modoOscuro={modoOscuro}
					toggleModoOscuro={toggleModoOscuro}
				/>
			</div>
			<ul className="flex flex-col py-4 items-left pl-1">
				{links.map((link, index) => (
					<li key={index}>
						<NavLink href={link.path} title={link.title} function1={closeMenu} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default MobileMenu;
