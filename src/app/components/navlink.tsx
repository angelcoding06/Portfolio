import React from "react";
import Link from "next/link";
type navlinksprops = {
	href: string;
	title: string;
};
const Navlink: React.FC<navlinksprops> = ({ href, title }) => {
	return (
		<Link
			className="text-[#ff8949] pl-3 pr-4 sm:text-xl rounded md:p-0 font-bold
							transition-all duration-500 transform hover:px-6 hover:py-2 hover:m-4 hover:inline
							hover:shadow-lg hover:bg-[#ff8949] hover:text-white
							dark:hover:bg-[#ff8949] dark:hover:text-white"
			href={href}
		>
			{title}
		</Link>
	);
};

export default Navlink;
