import React from "react";
import NavLink from "./navlink";

type linkprops = {
	links: {
		title: string;
		path: string;
	}[];
	closeMenu: () => void;
};
const MobileMenu: React.FC<linkprops> = ({ links, closeMenu }) => {

	return (
		<aside className="flex flex-row justify-between mx-auto md:hidden">
			<ul className="flex flex-col items-left pl-10 mb-2">
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
			</div>
		</aside>
	);
};

export default MobileMenu;
