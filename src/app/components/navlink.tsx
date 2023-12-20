import React from "react";
import Link from "next/link";
type navlinksprops = {
	href: string;
	title: string;
	function1?: () => void;
};

const Navlink: React.FC<navlinksprops> = ({ href, title, function1}) => {
	return (
		<Link
			className="text-[#ff8949] pl-2 pr-4 sm:text-xl rounded md:p-0 font-bold
							transition-all duration-500 transform md:hover:px-6 md:hover:py-2 md:hover:m-4
							hover:px-3 hover:py-1 hover:m-2
							hover:shadow-lg hover:bg-[#ff8949] hover:text-white"
			href={href}
			about={title}
			onClick={function1}
		>
			{title}
		</Link>
	);
};

export default Navlink;
